import React from 'react'
import SubMenuItem from './SubMenuItem'
import { MenuItemData } from '../types/sidebar'

interface MenuItemProps {
  item: MenuItemData
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
  const hasSubitems = item.subitems && item.subitems.length > 0

  const hasActiveSubitem =
    hasSubitems && item.subitems.some((subitem) => subitem.id === activeItem)

  // Se o item não tem subitens, ele pode ser ativo diretamente
  const isDirectlyActive = !hasSubitems && activeItem === item.id

  const buttonClasses = `
    w-full text-left px-6 py-3 transition-colors duration-200
    hover:text-[#FF5733] font-lt-superior text-[19px] leading-[27px]
    tracking-[0.01em] font-normal
    ${hasActiveSubitem || isDirectlyActive ? 'text-[#FF5733]' : 'text-white/40'}
  `
    .trim()
    .replace(/\s+/g, ' ')

  const handleClick = () => {
    if (hasSubitems) {
      // Se tem subitens, funciona como antes (expand/collapse)
      onToggleExpand(item.id)
    } else {
      // Se não tem subitens, trata como um item clicável diretamente
      onSubitemClick(item.id)
    }
  }

  return (
    <li>
      {/* Item Principal */}
      <button
        onClick={handleClick}
        className={buttonClasses}
        aria-expanded={hasSubitems ? expanded : undefined}
      >
        <span>{item.title}</span>
      </button>

      {/* Subitens - só renderiza se existirem */}
      {hasSubitems && expanded && (
        <ul className="ml-4" role="menu">
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
