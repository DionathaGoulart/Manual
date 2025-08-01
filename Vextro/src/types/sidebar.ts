export interface Subitem {
  id: string
  title: string
}

export interface MenuItemData {
  id: string
  title: string
  subitems: Subitem[]
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
