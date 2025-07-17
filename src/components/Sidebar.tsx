// components/Sidebar.tsx
import React from 'react'
import SidebarLogo from './SidebarLogo' // Importa o SidebarLogo
import MenuItem from './MenuItem' // Importa o MenuItem

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
  return (
    <div className="w-64 text-white flex flex-col fixed h-full overflow-y-auto z-10 top-0 left-0">
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
              onSubitemClick={onSubitemClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
