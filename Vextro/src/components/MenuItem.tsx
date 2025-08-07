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
  const hasSubitems = item.subitems?.length > 0
  const hasActiveSubitem =
    hasSubitems && item.subitems!.some((subitem) => subitem.id === activeItem)
  const isDirectlyActive = !hasSubitems && activeItem === item.id
  const isActive = hasActiveSubitem || isDirectlyActive

  const handleClick = () => {
    if (hasSubitems) {
      onToggleExpand(item.id)
    } else {
      onSubitemClick(item.id)
    }
  }

  const buttonClasses = `
    w-full text-left px-6 py-3 transition-colors duration-200
    hover:text-[#0B6AF4] font-avantique text-[19px] leading-[27px]
    tracking-[0.01em] font-normal
    ${isActive ? 'text-[#0B6AF4]' : 'text-white/40'}
  `
    .trim()
    .replace(/\s+/g, ' ')

  return (
    <li>
      <button
        onClick={handleClick}
        className={buttonClasses}
        aria-expanded={hasSubitems ? expanded : undefined}
      >
        <span>{item.title}</span>
      </button>

      {hasSubitems && expanded && (
        <ul className="ml-4" role="menu">
          {item.subitems!.map((subitem) => (
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
