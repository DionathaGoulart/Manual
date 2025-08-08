export interface RouteVisit {
  id: string
  route: string
  source: string
  timestamp: Date
  userAgent: string
}

export interface AnalyticsData {
  totalVisits: number
  uniqueVisitors: number
  sourceStats: Record<string, number>
  routeStats: Record<string, number>
  visits: RouteVisit[]
}

export interface RouterContextType {
  currentRoute: string
  navigate: (route: string, source?: string) => void
  analytics: AnalyticsData
}

export interface RouteConfig {
  path: string
  component: React.ComponentType<any>
  title?: string
}
