import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo
} from 'react'

// ============= INTERFACES =============
interface RouteVisit {
  id: string
  route: string
  source: string
  timestamp: Date
  userAgent: string
}

interface AnalyticsData {
  totalVisits: number
  uniqueVisitors: number
  sourceStats: Record<string, number>
  routeStats: Record<string, number>
  visits: RouteVisit[]
}

interface RouterContextType {
  currentRoute: string
  navigate: (route: string, source?: string) => void
  analytics: AnalyticsData
}

// ============= CONSTANTS =============
const REFERRER_SOURCES = {
  'instagram.com': 'instagram',
  'facebook.com': 'facebook',
  'twitter.com': 'twitter',
  'google.com': 'google',
  'youtube.com': 'youtube',
  'whatsapp.com': 'whatsapp',
  't.me': 'telegram'
} as const

const INITIAL_ANALYTICS: AnalyticsData = {
  totalVisits: 0,
  uniqueVisitors: 0,
  sourceStats: {},
  routeStats: {},
  visits: []
}

// ============= CONTEXT =============
const RouterContext = createContext<RouterContextType | undefined>(undefined)

// ============= UTILITIES =============
const detectSource = (): string => {
  const params = new URLSearchParams(window.location.search)

  // Verificar parâmetros UTM primeiro
  const utmSource = params.get('utm_source')
  if (utmSource) return utmSource

  const ref = params.get('ref')
  if (ref) return ref

  // Verificar referrer
  const referrer = document.referrer
  if (!referrer) return 'direct'

  // Buscar fonte conhecida no referrer
  for (const [domain, source] of Object.entries(REFERRER_SOURCES)) {
    if (referrer.includes(domain)) return source
  }

  return 'external'
}

const generateVisitId = (): string =>
  `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

const updateStats = (
  prevStats: Record<string, number>,
  key: string
): Record<string, number> => ({
  ...prevStats,
  [key]: (prevStats[key] || 0) + 1
})

// ============= CUSTOM HOOK =============
export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext)

  if (!context) {
    throw new Error('useRouter deve ser usado dentro de um RouterProvider')
  }

  return context
}

// ============= PROVIDER COMPONENT =============
interface RouterProviderProps {
  children: React.ReactNode
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(
    () => window.location.pathname
  )
  const [analytics, setAnalytics] = useState<AnalyticsData>(INITIAL_ANALYTICS)

  // Função de navegação memoizada
  const navigate = useCallback((route: string, source?: string) => {
    window.history.pushState({}, '', route)

    const detectedSource = source || detectSource()
    const visit: RouteVisit = {
      id: generateVisitId(),
      route,
      source: detectedSource,
      timestamp: new Date(),
      userAgent: navigator.userAgent
    }

    setAnalytics((prev) => {
      const newVisits = [...prev.visits, visit]
      const sourceStats = updateStats(prev.sourceStats, detectedSource)
      const routeStats = updateStats(prev.routeStats, route)
      const uniqueVisitors = new Set(newVisits.map((v) => v.userAgent)).size

      return {
        totalVisits: prev.totalVisits + 1,
        uniqueVisitors,
        sourceStats,
        routeStats,
        visits: newVisits
      }
    })

    setCurrentRoute(route)
  }, [])

  // Handler para popstate memoizado
  const handlePopState = useCallback(() => {
    setCurrentRoute(window.location.pathname)
  }, [])

  // Context value memoizado
  const contextValue = useMemo(
    () => ({
      currentRoute,
      navigate,
      analytics
    }),
    [currentRoute, navigate, analytics]
  )

  // Efeito para listener do popstate
  useEffect(() => {
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [handlePopState])

  // Efeito para navegação inicial
  useEffect(() => {
    const initialRoute = window.location.pathname
    navigate(initialRoute, detectSource())
  }, [navigate])

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  )
}
