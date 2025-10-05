import React from 'react'

import MainLayout from './layouts/MainLayout'
import { RouterProvider } from './routes'
import { Routes } from './routes/routes'

/**
 * Componente principal da aplicação.
 * Responsável por configurar o roteamento e o layout principal.
 */
const App: React.FC = () => {
  return (
    <RouterProvider>
      <MainLayout>
        <Routes />
      </MainLayout>
    </RouterProvider>
  )
}

export default App
