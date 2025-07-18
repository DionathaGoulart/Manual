// components/Sidebar.tsx
import React, { useState } from 'react'
import SidebarLogo from './SidebarLogo'
import MenuItem from './MenuItem'

interface Subitem {
  id: string
  title: string
}

interface MenuItemData {
  id: string
  title: string
  subitems: Subitem[]
}

interface SidebarProps {
  menuItems: MenuItemData[]
  expandedItem: string | null
  activeItem: string
  onToggleExpand: (itemId: string) => void
  onSubitemClick: (subitemId: string) => void
  logoSrc: string
  logoAlt: string
}

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Botão Hamburger - apenas no mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-[100] p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
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
      </button>

      {/* Overlay para mobile */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
 w-[90%] max-w-md text-white flex flex-col fixed h-full overflow-y-auto z-50 top-0
 transition-transform duration-300 ease-in-out
 md:translate-x-0 md:static
 ${
   isMobileMenuOpen
     ? 'translate-x-0 left-1/2 -translate-x-1/2'
     : '-translate-x-full'
 }
 bg-gray-900 // Ensure a solid background
 `}
      >
        <SidebarLogo logoSrc={logoSrc} altText={logoAlt} />

        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                expanded={expandedItem === item.id}
                activeItem={activeItem}
                onToggleExpand={onToggleExpand}
                onSubitemClick={(subitemId) => {
                  onSubitemClick(subitemId)
                  // Fecha o menu mobile quando clica em um item
                  setIsMobileMenuOpen(false)
                }}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
