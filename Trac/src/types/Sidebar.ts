/**
 * Dados de um subitem do menu.
 * @property id - Identificador único do subitem
 * @property title - Título exibido do subitem
 */
export interface Subitem {
  id: string
  title: string
}

/**
 * Dados de um item do menu principal.
 * @property id - Identificador único do item
 * @property title - Título exibido do item
 * @property subitems - Lista de subitens do menu
 */
export interface MenuItemData {
  id: string
  title: string
  subitems: Subitem[]
}

/**
 * Propriedades do componente SidebarLogo.
 * @property logoSrc - Caminho da imagem do logo
 * @property altText - Texto alternativo para acessibilidade
 */
export interface SidebarLogoProps {
  logoSrc: string
  altText: string
}

/**
 * Propriedades do componente Sidebar.
 * @property menuItems - Lista de itens do menu
 * @property expandedItem - ID do item expandido atualmente
 * @property activeItem - ID do item ativo atualmente
 * @property onToggleExpand - Callback para expandir/contrair item
 * @property onSubitemClick - Callback para clicar em subitem
 * @property logoSrc - Caminho da imagem do logo
 * @property logoAlt - Texto alternativo do logo
 */
export interface SidebarProps {
  menuItems: MenuItemData[]
  expandedItem: string | null
  activeItem: string
  onToggleExpand: (itemId: string) => void
  onSubitemClick: (subitemId: string) => void
  logoSrc: string
  logoAlt: string
}

/**
 * Propriedades do componente MenuItem.
 * @property item - Dados do item do menu
 * @property expanded - Se o item está expandido
 * @property activeItem - ID do item ativo
 * @property onToggleExpand - Callback para expandir/contrair
 * @property onSubitemClick - Callback para clicar em subitem
 */
export interface MenuItemProps {
  item: MenuItemData
  expanded: boolean
  activeItem: string
  onToggleExpand: (itemId: string) => void
  onSubitemClick: (subitemId: string) => void
}

/**
 * Propriedades do componente SubMenuItem.
 * @property id - Identificador único do subitem
 * @property title - Título do subitem
 * @property active - Se o subitem está ativo
 * @property onClick - Callback para clicar no subitem
 */
export interface SubMenuItemProps {
  id: string
  title: string
  active: boolean
  onClick: (id: string) => void
}

/**
 * Retorno do hook useSectionNavigation.
 * @property activeMainSection - Seção principal ativa
 * @property activeItem - Item ativo atual
 * @property setActiveMainSection - Função para definir seção ativa
 * @property setActiveItem - Função para definir item ativo
 * @property getMainSectionFromItem - Função para obter seção de um item
 * @property getFirstItemFromSection - Função para obter primeiro item de uma seção
 * @property navigateToSection - Função para navegar para uma seção
 * @property navigateToItem - Função para navegar para um item
 */
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
