// components/MenuItem.tsx
import React from 'react'
import SubMenuItem from './SubMenuItem' // Importa o SubMenuItem

interface Subitem {
  id: string
  title: string
}

interface MenuItemProps {
  item: {
    id: string
    title: string
    subitems: Subitem[]
  }
  expanded: boolean
  activeItem: string
  onToggleExpand: (itemId: string) => void
  onSubitemClick: (subitemId: string) => void
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  expanded,
  activeItem,
  onToggleExpand,
  onSubitemClick
}) => {
  return (
    <li>
      {/* Item Principal */}
      <button
        onClick={() => onToggleExpand(item.id)}
        className="w-full text-left px-6 py-3 text-sm transition-colors duration-200 hover:bg-white/10 text-gray-300 hover:text-white"
      >
        <span>{item.title}</span>
      </button>

      {/* Subitens */}
      {expanded && (
        <ul className="ml-4">
          {item.subitems.map((subitem) => (
            <SubMenuItem
              key={subitem.id}
              id={subitem.id}
              title={subitem.title}
              active={activeItem === subitem.id}
              onClick={onSubitemClick}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default MenuItem
