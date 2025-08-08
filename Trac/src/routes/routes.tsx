import React, { useEffect } from 'react'
import { useRouter } from './index'
import { Home, NotFoundPage } from '@pages'

import { RouteConfig } from '@/types/Routes'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    title: 'Trac - Manual de Marca'
  }
]

export const Routes: React.FC = () => {
  const { currentRoute } = useRouter()

  const currentRouteConfig = routesConfig.find(
    (route) => route.path === currentRoute
  )

  useEffect(() => {
    if (currentRouteConfig?.title) {
      document.title = currentRouteConfig.title
    }
  }, [currentRouteConfig?.title])

  if (!currentRouteConfig) {
    return <NotFoundPage />
  }

  const Component = currentRouteConfig.component

  return <Component />
}

export default Routes
