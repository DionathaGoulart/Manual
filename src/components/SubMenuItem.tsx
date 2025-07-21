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
  const baseClasses =
    'w-full text-left pl-8 pr-6 py-2 transition-colors duration-200 group'
  const activeClasses = active
    ? 'text-[#FF5733]'
    : 'text-gray-400 hover:text-[#FF5733]'

  const spanBaseClasses = 'mr-3 text-xs font-mono'
  const spanActiveClasses = active
    ? 'text-[#FF5733]'
    : 'text-gray-400 group-hover:text-[#FF5733]'

  return (
    <li>
      <button
        onClick={() => onClick(id)}
        className={`${baseClasses} ${activeClasses}`}
      >
        <span className={`${spanBaseClasses} ${spanActiveClasses}`}>{id}</span>
        <span className="font-lt-superior font-normal text-[15px] leading-[23px] tracking-[0.03em]">
          {title}
        </span>
      </button>
    </li>
  )
}

export default SubMenuItem
