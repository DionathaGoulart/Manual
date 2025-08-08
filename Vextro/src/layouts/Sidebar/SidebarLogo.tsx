import React from 'react'
import { SidebarLogoProps } from '@/types/Sidebar'

const SidebarLogo: React.FC<SidebarLogoProps> = ({ logoSrc, altText }) => (
  <div className="p-6 flex justify-start items-center mb-8">
    <img src={logoSrc} alt={altText} className="h-12 w-auto" />
  </div>
)

export default SidebarLogo
