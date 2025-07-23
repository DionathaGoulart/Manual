import React, { useState, useCallback } from 'react'
import SidebarLogo from './SidebarLogo'
import MenuItem from './MenuItem'
import { SidebarProps } from '../types/sidebar'

const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  expandedItem,
  activeItem,
  onToggleExpand,
  onSubitemClick,
  logoSrc,
  logoAlt
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const handleSubitemClick = useCallback(
    (subitemId: string) => {
      onSubitemClick(subitemId)
      setIsMobileMenuOpen(false)
    },
    [onSubitemClick]
  )

  const sidebarClasses = `
    w-full md:w-64 text-white flex flex-col fixed h-full overflow-y-auto
    z-50 top-0 left-0 transition-transform duration-300 ease-in-out bg-transparent
    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
  `
    .trim()
    .replace(/\s+/g, ' ')

  return (
    <>
      {/* Botão Hamburger - Mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-[100] p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMobileMenuOpen}
      >
        <HamburgerIcon isOpen={isMobileMenuOpen} />
      </button>

      {/* Overlay Mobile */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
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

// Componente auxiliar para ícone do hamburger
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

export default Sidebar
