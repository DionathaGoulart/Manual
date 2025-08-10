import React from 'react'
import SubMenuItem from './SubMenuItem'
import { MenuItemProps } from '@/types/Sidebar'

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  expanded,
  activeItem,
  onToggleExpand,
  onSubitemClick
}) => {
  const hasSubitems = item.subitems?.length > 0

  // Verifica se algum subitem está ativo
  const hasActiveSubitem =
    hasSubitems && item.subitems!.some((subitem) => subitem.id === activeItem)

  // Verifica se este item (sem subitens) está ativo
  const isDirectlyActive = !hasSubitems && activeItem === item.id

  // Item está ativo se é direto e ativo, ou se tem subitem ativo
  const isActive = hasActiveSubitem || isDirectlyActive

  const handleClick = () => {
    onToggleExpand(item.id)
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
