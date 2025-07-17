// components/SubMenuItem.tsx
import React from 'react'

interface SubMenuItemProps {
  id: string
  title: string
  active: boolean
  onClick: (id: string) => void
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({
  id,
  title,
  active,
  onClick
}) => {
  return (
    <li>
      <button
        onClick={() => onClick(id)}
        className={`w-full text-left pl-8 pr-6 py-2 text-sm transition-colors duration-200 hover:bg-white/10 flex items-center ${
          active ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        <span className="mr-3 text-xs font-mono text-gray-400">{id}</span>
        <span>{title}</span>
      </button>
    </li>
  )
}

export default SubMenuItem
