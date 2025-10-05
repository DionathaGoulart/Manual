import React, { useState, useEffect, useCallback } from 'react'

import { menuItems } from '@/data/menuItems'
import Sidebar from '@layouts/Sidebar'

// ================================
// TIPOS
// ================================

interface MainLayoutProps {
  children?: React.ReactNode
}

// ================================
// CONSTANTES
// ================================

const DEFAULT_EXPANDED_ITEM = '1'
const DEFAULT_ACTIVE_ITEM = '1.1'

// ================================
// FUNÇÕES AUXILIARES
// ================================

/**
 * Verifica se a sidebar deve estar colapsada baseado na largura da tela.
 * @returns boolean indicando se deve colapsar
 */
const shouldCollapseSidebar = (): boolean => {
  return window.innerWidth < 1024
}

/**
 * Encontra o item pai de um subitem.
 * @param itemId - ID do subitem
 * @returns Item pai ou undefined
 */
const findParentItem = (itemId: string) => {
  return menuItems.find((item) =>
    item.subitems?.some((sub) => sub.id === itemId)
  )
}

/**
 * Verifica se um item é direto (sem subitens).
 * @param itemId - ID do item
 * @returns boolean indicando se é item direto
 */
const isDirectItem = (itemId: string): boolean => {
  const item = menuItems.find((item) => item.id === itemId)
  return item ? (!item.subitems || item.subitems.length === 0) : false
}

// ================================
// COMPONENTE PRINCIPAL
// ================================

/**
 * Layout principal da aplicação com sidebar e conteúdo.
 * Gerencia o estado da sidebar, navegação e responsividade.
 * @param children - Conteúdo a ser renderizado
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(DEFAULT_EXPANDED_ITEM)
  const [activeItem, setActiveItem] = useState<string>(DEFAULT_ACTIVE_ITEM)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const checkSidebarCollapse = useCallback(() => {
    setIsCollapsed(shouldCollapseSidebar())
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
    []
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
  }, [expandedItem])

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

  // ================================
  // CLASSES CSS MEMOIZADAS
  // ================================

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

  // ================================
  // PROPS DO SIDEBAR
  // ================================

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
          <div className="w-full mx-auto max-w-4xl pr-0 lg:pr-16 lg:max-w-none xl:pr-24 2xl:pr-28">
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
