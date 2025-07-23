import React, { useState, useEffect, useCallback } from 'react'
import Sidebar from '@/components/Sidebar'
import { menuItems } from '@/data/menuItems'

interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState<string>('1.1')
  const [isCollapsed, setIsCollapsed] = useState(false)

  const checkSidebarCollapse = useCallback(() => {
    setIsCollapsed(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    const initialParent = menuItems.find((item) =>
      item.subitems.some((sub) => sub.id === activeItem)
    )
    if (initialParent) {
      setExpandedItem(initialParent.id)
    }

    checkSidebarCollapse()
    window.addEventListener('resize', checkSidebarCollapse)

    return () => {
      window.removeEventListener('resize', checkSidebarCollapse)
    }
  }, [activeItem, checkSidebarCollapse])

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      const { activeSection } = event.detail
      setActiveItem(activeSection)
      const parentItem = menuItems.find((item) =>
        item.subitems.some((sub) => sub.id === activeSection)
      )
      if (parentItem && expandedItem !== parentItem.id) {
        setExpandedItem(parentItem.id)
      }
    }

    window.addEventListener(
      'sectionChange',
      handleSectionChange as EventListener
    )

    return () => {
      window.removeEventListener(
        'sectionChange',
        handleSectionChange as EventListener
      )
    }
  }, [expandedItem])

  const handleToggleExpand = (itemId: string) => {
    const itemToExpand = menuItems.find((item) => item.id === itemId)
    if (expandedItem === itemId) {
      setExpandedItem(null)
    } else {
      setExpandedItem(itemId)
      if (itemToExpand && itemToExpand.subitems.length > 0) {
        const firstSubitemId = itemToExpand.subitems[0].id
        setActiveItem(firstSubitemId)
        window.dispatchEvent(
          new CustomEvent('sidebarClick', {
            detail: { subitemId: firstSubitemId }
          })
        )
      }
    }
  }

  const handleSubitemClick = (subitemId: string) => {
    setActiveItem(subitemId)
    window.dispatchEvent(
      new CustomEvent('sidebarClick', {
        detail: { subitemId }
      })
    )
  }

  const handleToggleCollapsed = useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  return (
    <div className="min-h-screen">
      <div
        className={`
        transition-all duration-300 ease-in-out
        ${
          isCollapsed
            ? 'lg:ml-64' // Margem quando sidebar está fixa
            : 'lg:ml-0' // Sem margem quando sidebar não está fixa
        }
        lg:grid lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-8
        xl:gap-8 xl:px-12 xl:py-12
        2xl:gap-10 2xl:px-16 2xl:py-16
      `}
      >
        {/* Espaçamento esquerdo */}
        <div
          className="
          hidden lg:block lg:col-span-2
          xl:col-span-2
          2xl:col-span-2
        "
        ></div>

        {/* Sidebar - única renderização */}
        <div
          className={`
          ${
            isCollapsed
              ? 'lg:col-span-0' // Não ocupa espaço no grid quando colapsada
              : 'lg:col-span-2'
          }
          xl:col-span-2
          2xl:col-span-2
        `}
        >
          {!isCollapsed && (
            <div className="sticky top-8">
              <Sidebar
                menuItems={menuItems}
                expandedItem={expandedItem}
                activeItem={activeItem}
                onToggleExpand={handleToggleExpand}
                onSubitemClick={handleSubitemClick}
                logoSrc="/logo.svg"
                logoAlt="Logo da Empresa"
                isCollapsed={isCollapsed}
                onToggleCollapsed={handleToggleCollapsed}
              />
            </div>
          )}
        </div>

        {/* Sidebar colapsada renderizada fora do grid */}
        {isCollapsed && (
          <Sidebar
            menuItems={menuItems}
            expandedItem={expandedItem}
            activeItem={activeItem}
            onToggleExpand={handleToggleExpand}
            onSubitemClick={handleSubitemClick}
            logoSrc="/logo.svg"
            logoAlt="Logo da Empresa"
            isCollapsed={isCollapsed}
            onToggleCollapsed={handleToggleCollapsed}
          />
        )}

        {/* Conteúdo principal */}
        <main
          className={`
          pt-16 pb-8 px-4
          ${
            isCollapsed
              ? 'lg:col-span-7 lg:col-start-3' // Ajusta posição quando sidebar colapsada
              : 'lg:col-span-5'
          }
          lg:pt-0 lg:px-0
          xl:col-span-5
          2xl:col-span-5
        `}
        >
          <div
            className="
            w-full
            pr-16 lg:pr-20 xl:pr-24 2xl:pr-28
          "
          >
            {children}
          </div>
        </main>

        {/* Espaçamento direito */}
        <div
          className="
          hidden lg:block lg:col-span-3
          xl:col-span-3
          2xl:col-span-3
        "
        ></div>
      </div>
    </div>
  )
}

export default MainLayout
