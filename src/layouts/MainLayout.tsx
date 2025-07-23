import React, { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { menuItems } from '@/data/menuItems'

interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState<string>('1.1')

  // Inicializar o item expandido baseado no item ativo
  useEffect(() => {
    const initialParent = menuItems.find((item) =>
      item.subitems.some((sub) => sub.id === activeItem)
    )
    if (initialParent) {
      setExpandedItem(initialParent.id)
    }
  }, [activeItem])

  // Listener para mudanças de seção vindas do Home
  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      const { activeSection } = event.detail
      setActiveItem(activeSection)

      // Expandir automaticamente o item pai da seção ativa
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

  // Função para expandir/recolher itens
  const handleToggleExpand = (itemId: string) => {
    const itemToExpand = menuItems.find((item) => item.id === itemId)
    if (expandedItem === itemId) {
      setExpandedItem(null)
    } else {
      setExpandedItem(itemId)
      if (itemToExpand && itemToExpand.subitems.length > 0) {
        const firstSubitemId = itemToExpand.subitems[0].id
        setActiveItem(firstSubitemId)

        // Dispatch evento para o Home fazer o scroll
        window.dispatchEvent(
          new CustomEvent('sidebarClick', {
            detail: { subitemId: firstSubitemId }
          })
        )
      }
    }
  }

  // Função para selecionar subitem
  const handleSubitemClick = (subitemId: string) => {
    setActiveItem(subitemId)

    // Dispatch evento para o Home fazer o scroll
    window.dispatchEvent(
      new CustomEvent('sidebarClick', {
        detail: { subitemId }
      })
    )
  }

  return (
    <>
      <Sidebar
        menuItems={menuItems}
        expandedItem={expandedItem}
        activeItem={activeItem}
        onToggleExpand={handleToggleExpand}
        onSubitemClick={handleSubitemClick}
        logoSrc="/logo.svg"
        logoAlt="Logo da Empresa"
      />

      {/* Main responsivo: sem margin no mobile, com margin no desktop */}
      <main
        className="
  /* Mobile First (xs - até 639px) */
  space-y-16
  pt-20
  px-4

  /* Small devices (sm - 640px+) */
  sm:space-y-20
  sm:pt-24
  sm:px-6

  /* Medium devices (md - 768px+) */
  md:ml-64
  md:mt-20
  md:space-y-24
  md:pt-8
  md:px-8

  /* Large devices (lg - 1024px+) */
  lg:space-y-28
  lg:pt-12
  lg:px-12

  /* Extra Large devices (xl - 1280px+) */
  xl:space-y-32
  xl:pt-16
  xl:px-16

  /* 2XL devices (2xl - 1536px+) */
  2xl:space-y-36
  2xl:pt-20
  2xl:px-20
"
      >
        {children}
      </main>
    </>
  )
}

export default MainLayout
