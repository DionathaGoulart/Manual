import React, { useState, useEffect, useCallback } from 'react'
import { menuItems } from '@/data/menuItems'
import Sidebar from './Sidebar'

interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>('1') // Começa com a primeira seção expandida
  const [activeItem, setActiveItem] = useState<string>('1.1')
  const [isCollapsed, setIsCollapsed] = useState(false)

  const checkSidebarCollapse = useCallback(() => {
    setIsCollapsed(window.innerWidth < 1024)
  }, [])

  const findParentItem = useCallback((itemId: string) => {
    return menuItems.find((item) =>
      item.subitems?.some((sub) => sub.id === itemId)
    )
  }, [])

  const isDirectItem = useCallback((itemId: string) => {
    const item = menuItems.find((item) => item.id === itemId)
    return item && (!item.subitems || item.subitems.length === 0)
  }, [])

  const updateExpandedState = useCallback(
    (itemId: string) => {
      if (isDirectItem(itemId)) {
        setExpandedItem(null)
      } else {
        const parentItem = findParentItem(itemId)
        if (parentItem) {
          setExpandedItem(parentItem.id)
        }
      }
    },
    [isDirectItem, findParentItem]
  )

  useEffect(() => {
    updateExpandedState(activeItem)
    checkSidebarCollapse()

    window.addEventListener('resize', checkSidebarCollapse)
    return () => window.removeEventListener('resize', checkSidebarCollapse)
  }, [activeItem, checkSidebarCollapse, updateExpandedState])

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      const { activeSection } = event.detail
      setActiveItem(activeSection)

      if (isDirectItem(activeSection)) {
        setExpandedItem(null)
      } else {
        const parentItem = findParentItem(activeSection)
        if (parentItem && expandedItem !== parentItem.id) {
          setExpandedItem(parentItem.id)
        }
      }
    }

    window.addEventListener(
      'sectionChange',
      handleSectionChange as EventListener
    )
    return () =>
      window.removeEventListener(
        'sectionChange',
        handleSectionChange as EventListener
      )
  }, [expandedItem, isDirectItem, findParentItem])

  const handleToggleExpand = useCallback(
    (itemId: string) => {
      const itemToExpand = menuItems.find((item) => item.id === itemId)

      if (!itemToExpand) return

      // Se não tem subitems, é um item direto - navegar para a seção principal
      if (!itemToExpand.subitems?.length) {
        setExpandedItem(null)
        setActiveItem(itemId)

        // Dispara evento para mudança de seção principal
        window.dispatchEvent(
          new CustomEvent('sidebarClick', {
            detail: { mainSectionId: itemId, subitemId: itemId }
          })
        )
        return
      }

      // Se já está expandido, colapsa
      if (expandedItem === itemId) {
        setExpandedItem(null)
      } else {
        // Expande e navega para o primeiro subitem
        setExpandedItem(itemId)
        const firstSubitemId = itemToExpand.subitems[0].id
        setActiveItem(firstSubitemId)

        // Dispara evento para mudança de seção principal
        window.dispatchEvent(
          new CustomEvent('sidebarClick', {
            detail: { mainSectionId: itemId, subitemId: firstSubitemId }
          })
        )
      }
    },
    [expandedItem]
  )

  const handleSubitemClick = useCallback((subitemId: string) => {
    setActiveItem(subitemId)
    window.dispatchEvent(
      new CustomEvent('sidebarClick', {
        detail: { subitemId }
      })
    )
  }, [])

  const handleToggleCollapsed = useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  const containerClasses = `
    transition-all duration-300 ease-in-out
    ${isCollapsed ? 'lg:ml-64' : 'lg:ml-0'}
    lg:grid lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-8
    xl:gap-8 xl:px-12 xl:py-12
    2xl:gap-10 2xl:px-16 2xl:py-16
  `
    .trim()
    .replace(/\s+/g, ' ')

  const sidebarContainerClasses = `
    ${isCollapsed ? 'lg:col-span-0' : 'lg:col-span-2'}
    xl:col-span-2 2xl:col-span-2
  `
    .trim()
    .replace(/\s+/g, ' ')

  const mainContentClasses = `
    pt-16 pb-8 px-6
    ${isCollapsed ? 'lg:col-span-7 lg:col-start-3' : 'lg:col-span-5'}
    lg:pt-0 lg:px-0 xl:col-span-5 2xl:col-span-5
  `
    .trim()
    .replace(/\s+/g, ' ')

  const sidebarProps = {
    menuItems,
    expandedItem,
    activeItem,
    onToggleExpand: handleToggleExpand,
    onSubitemClick: handleSubitemClick,
    logoSrc: '/logo.svg',
    logoAlt: 'Logo da Empresa',
    isCollapsed,
    onToggleCollapsed: handleToggleCollapsed
  }

  return (
    <div className="min-h-screen">
      <div className={containerClasses}>
        {/* Espaçamento esquerdo */}
        <div className="hidden lg:block lg:col-span-2 xl:col-span-2 2xl:col-span-2" />

        {/* Sidebar - renderização condicional */}
        <div className={sidebarContainerClasses}>
          {!isCollapsed && (
            <div className="sticky top-8">
              <Sidebar {...sidebarProps} />
            </div>
          )}
        </div>

        {/* Sidebar colapsada - renderizada fora do grid */}
        {isCollapsed && <Sidebar {...sidebarProps} />}

        {/* Conteúdo principal */}
        <main className={mainContentClasses}>
          <div className="w-full mx-auto max-w-4xl pr-0 lg:pr-16 lg:max-w-none xl:pr-20 xl:pr-24 2xl:pr-28">
            {children}
          </div>
        </main>

        {/* Espaçamento direito */}
        <div className="hidden lg:block lg:col-span-3 xl:col-span-3 2xl:col-span-3" />
      </div>
    </div>
  )
}

export default MainLayout
