export interface MenuItemProps {
  item: MenuItemData
  expanded: boolean
  activeItem: string
  onToggleExpand: (itemId: string) => void
  onSubitemClick: (subitemId: string) => void
}

export interface Subitem {
  id: string
  title: string
}

export interface MenuItemData {
  id: string
  title: string
  subitems: Subitem[]
}

export interface SidebarLogoProps {
  logoSrc: string
  altText: string
}

export interface SidebarProps {
  menuItems: MenuItemData[]
  expandedItem: string | null
  activeItem: string
  onToggleExpand: (itemId: string) => void
  onSubitemClick: (subitemId: string) => void
  logoSrc: string
  logoAlt: string
}

export interface SubMenuItemProps {
  id: string
  title: string
  active: boolean
  onClick: (id: string) => void
}

export interface UseSectionNavigationReturn {
  activeMainSection: string
  activeItem: string
  setActiveMainSection: (section: string) => void
  setActiveItem: (item: string) => void
  getMainSectionFromItem: (itemId: string) => string
  getFirstItemFromSection: (sectionId: string) => string | null
  navigateToSection: (sectionId: string) => void
  navigateToItem: (itemId: string) => void
}
