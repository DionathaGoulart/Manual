/**
 * Dados de uma visita a uma rota específica.
 * @property id - Identificador único da visita
 * @property route - Rota acessada
 * @property source - Origem da navegação
 * @property timestamp - Data e hora da visita
 * @property userAgent - Informações do navegador do usuário
 */
export interface RouteVisit {
  id: string
  route: string
  source: string
  timestamp: Date
  userAgent: string
}

/**
 * Dados de analytics agregados.
 * @property totalVisits - Total de visitas registradas
 * @property uniqueVisitors - Número de visitantes únicos
 * @property sourceStats - Estatísticas por fonte de navegação
 * @property routeStats - Estatísticas por rota
 * @property visits - Lista de todas as visitas
 */
export interface AnalyticsData {
  totalVisits: number
  uniqueVisitors: number
  sourceStats: Record<string, number>
  routeStats: Record<string, number>
  visits: RouteVisit[]
}

/**
 * Tipo do contexto do roteador.
 * @property currentRoute - Rota atual ativa
 * @property navigate - Função para navegar entre rotas
 * @property analytics - Dados de analytics do roteamento
 */
export interface RouterContextType {
  currentRoute: string
  navigate: (route: string, source?: string) => void
  analytics: AnalyticsData
}

/**
 * Configuração de uma rota.
 * @property path - Caminho da rota
 * @property component - Componente React a ser renderizado
 * @property title - Título opcional da rota
 */
export interface RouteConfig {
  path: string
  component: React.ComponentType<any>
  title?: string
}
