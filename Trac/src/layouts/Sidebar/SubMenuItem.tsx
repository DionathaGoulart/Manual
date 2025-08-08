import React from 'react'
import { SubMenuItemProps } from '@/types/Sidebar'

const SubMenuItem: React.FC<SubMenuItemProps> = ({
  id,
  title,
  active,
  onClick
}) => {
  const buttonClasses = `
    w-full text-left pl-8 pr-6 py-2 transition-colors duration-200 group
    ${active ? 'text-[#FF5733]' : 'text-gray-400 hover:text-[#FF5733]'}
  `
    .trim()
    .replace(/\s+/g, ' ')

  const idSpanClasses = `
    mr-3 text-xs font-mono
    ${active ? 'text-[#FF5733]' : 'text-gray-400 group-hover:text-[#FF5733]'}
  `
    .trim()
    .replace(/\s+/g, ' ')

  return (
    <li>
      <button onClick={() => onClick(id)} className={buttonClasses}>
        <span className={idSpanClasses}>{id}</span>
        <span className="font-lt-superior font-normal text-[15px] leading-[23px] tracking-[0.03em]">
          {title}
        </span>
      </button>
    </li>
  )
}

export default SubMenuItem
