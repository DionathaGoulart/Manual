export interface Subitem {
  id: string
  title: string
}

export interface MenuItemData {
  id: string
  title: string
  subitems: Subitem[]
}

export const menuItems: MenuItemData[] = [
  {
    id: 'hero',
    title: 'Dashboard',
    subitems: [
      { id: '1.1', title: 'Hero' },
      { id: '1.2', title: 'Sobre' },
      { id: '1.3', title: 'Serviços' }
    ]
  },
  {
    id: '2',
    title: 'Portfólio',
    subitems: [
      { id: '2.1', title: 'Projetos' },
      { id: '2.2', title: 'Equipe' },
      { id: '2.3', title: 'Depoimentos' }
    ]
  },
  {
    id: '3',
    title: 'Contato',
    subitems: [
      { id: '3.1', title: 'Preços' },
      { id: '3.2', title: 'Blog' },
      { id: '3.3', title: 'Contato' }
    ]
  }
]
