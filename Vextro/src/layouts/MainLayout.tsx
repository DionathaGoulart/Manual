import React, { useState, useEffect, useCallback } from 'react'
import { menuItems } from '@/data/menuItems'
import Sidebar from './Sidebar'

interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>('1')
  const [activeItem, setActiveItem] = useState<string>('1.1')
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Função para verificar se deve colapsar baseado no tamanho da tela
  const checkSidebarCollapse = useCallback(() => {
    setIsCollapsed(window.innerWidth < 1024)
  }, [])

  // Função para encontrar o item pai de um subitem
  const findParentItem = useCallback((itemId: string) => {
    for (const item of menuItems) {
      if (item.subitems?.some((sub) => sub.id === itemId)) {
        return item
      }
    }
    return null
  }, [])

  // Função para verificar se é um item direto (sem subitens)
  const isDirectItem = useCallback((itemId: string) => {
    const item = menuItems.find((item) => item.id === itemId)
    return item && (!item.subitems || item.subitems.length === 0)
  }, [])

  // Inicialização e eventos de resize
  useEffect(() => {
    checkSidebarCollapse()
    window.addEventListener('resize', checkSidebarCollapse)
    return () => window.removeEventListener('resize', checkSidebarCollapse)
  }, [checkSidebarCollapse])

  // Handler para mudanças de seção vindas do scroll observer
  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      const { activeSection } = event.detail

      if (!activeSection) return

      setActiveItem(activeSection)

      // Se é um item direto (como seção 7 ou 9)
      if (isDirectItem(activeSection)) {
        setExpandedItem(null)
        return
      }

      // Procura o item pai para subitens
      const parentItem = findParentItem(activeSection)
      if (parentItem) {
        setExpandedItem(parentItem.id)
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
  }, [isDirectItem, findParentItem])

  // Handler para expandir/colapsar itens do menu
  const handleToggleExpand = useCallback(
    (itemId: string) => {
      const itemToExpand = menuItems.find((item) => item.id === itemId)
      if (!itemToExpand) return

      // Se não tem subitems, é um item direto
      if (!itemToExpand.subitems?.length) {
        setExpandedItem(null)
        setActiveItem(itemId)

        // Dispara evento para navegação direta
        window.dispatchEvent(
          new CustomEvent('sidebarClick', {
            detail: {
              sectionId: itemId,
              isDirect: true
            }
          })
        )
        return
      }

      // Para itens com subitens
      if (expandedItem === itemId) {
        // Se já está expandido, colapsa
        setExpandedItem(null)
      } else {
        // Expande e ativa o primeiro subitem
        setExpandedItem(itemId)
        const firstSubitemId = itemToExpand.subitems[0].id
        setActiveItem(firstSubitemId)

        // Dispara evento para navegação
        window.dispatchEvent(
          new CustomEvent('sidebarClick', {
            detail: {
              sectionId: firstSubitemId,
              parentId: itemId
            }
          })
        )
      }
    },
    [expandedItem]
  )

  // Handler para cliques em subitens
  const handleSubitemClick = useCallback((subitemId: string) => {
    setActiveItem(subitemId)

    window.dispatchEvent(
      new CustomEvent('sidebarClick', {
        detail: {
          sectionId: subitemId
        }
      })
    )
  }, [])

  const handleToggleCollapsed = useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  // Classes CSS organizadas
  const containerClasses = `
    bg-[#101010]
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
          <div className="w-full mx-auto"> {children}</div>
        </main>

        {/* Espaçamento direito */}
        <div className="hidden lg:block lg:col-span-3 xl:col-span-3 2xl:col-span-3" />
      </div>
    </div>
  )
}

export default MainLayout
