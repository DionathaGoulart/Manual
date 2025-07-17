import React from 'react'
import TracSidebar from '@components/TracSidebar'

interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <TracSidebar />
      <main className="space-y-24">{children}</main>
    </>
  )
}
export default MainLayout
