import React, { useState, useCallback, useEffect } from 'react'
import SidebarLogo from './SidebarLogo'
import MenuItem from './MenuItem'
import { SidebarProps } from '../types/sidebar'

interface CustomSidebarProps extends SidebarProps {
  isCollapsed: boolean
  onToggleCollapsed: () => void
}

const Sidebar: React.FC<CustomSidebarProps> = ({
  menuItems,
  expandedItem,
  activeItem,
  onToggleExpand,
  onSubitemClick,
  logoSrc,
  logoAlt,
  isCollapsed,
  onToggleCollapsed
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isCollapsed && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isCollapsed, isMobileMenuOpen])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const handleSubitemClick = useCallback(
    (subitemId: string) => {
      onSubitemClick(subitemId)
      if (isCollapsed) {
        setIsMobileMenuOpen(false)
      }
    },
    [onSubitemClick, isCollapsed]
  )

  // Sidebar que rola naturalmente junto com o conteúdo da página
  const sidebarClasses = `
    text-white flex flex-col
    transition-transform duration-300 ease-in-out bg-transparent

    ${
      isCollapsed
        ? `fixed top-0 left-0 z-50 w-64 h-full bg-gray-900 shadow-xl overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`
        : 'w-full relative bg-gray-900'
    }
  `
    .trim()
    .replace(/\s+/g, ' ')

  return (
    <>
      {/* Botão Hamburger - só no mobile quando colapsado */}
      {isCollapsed && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-[100] p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors lg:hidden"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <HamburgerIcon isOpen={isMobileMenuOpen} />
        </button>
      )}

      {/* Overlay Mobile - só quando mobile e colapsado */}
      {isCollapsed && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
          role="button"
          tabIndex={0}
          aria-label="Fechar menu"
        />
      )}

      {/* Sidebar */}
      <aside className={sidebarClasses} role="navigation">
        <SidebarLogo logoSrc={logoSrc} altText={logoAlt} />
        <nav className="flex-1 py-4">
          <ul className="space-y-1" role="menubar">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                expanded={expandedItem === item.id}
                activeItem={activeItem}
                onToggleExpand={onToggleExpand}
                onSubitemClick={handleSubitemClick}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

const HamburgerIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
)

const ToggleIcon: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {isCollapsed ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 19l-7-7 7-7M19 19l-7-7 7-7"
      />
    )}
  </svg>
)

export default Sidebar
