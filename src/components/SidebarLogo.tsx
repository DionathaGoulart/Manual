import React from 'react'

interface SidebarLogoProps {
  logoSrc: string
  altText: string
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ logoSrc, altText }) => {
  return (
    <div className="p-6 flex justify-center items-center mb-8">
      <img src={logoSrc} alt={altText} className="h-12 w-auto" />
    </div>
  )
}

export default SidebarLogo
