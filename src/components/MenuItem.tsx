import React from 'react'
import SubMenuItem from './SubMenuItem'

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
  // Verifica se algum subitem está ativo
  const hasActiveSubitem = item.subitems.some(
    (subitem) => subitem.id === activeItem
  )

  return (
    <li>
      {/* Item Principal */}
      <button
        onClick={() => onToggleExpand(item.id)}
        className={`w-full text-left px-6 py-3 transition-colors duration-200 hover:text-[#FF5733] font-lt-superior text-[19px] leading-[27px] tracking-[0.01em] font-normal ${
          hasActiveSubitem ? 'text-[#FF5733]' : 'text-white/40'
        }`}
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
