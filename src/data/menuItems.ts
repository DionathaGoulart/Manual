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
    id: '1',
    title: 'Introdução',
    subitems: [
      { id: '1.1', title: 'Sobre o Manual' },
      { id: '1.2', title: 'Sobre a trac©' },
      { id: '1.3', title: 'Downloads' }
    ]
  },
  {
    id: '2',
    title: 'Estratégia',
    subitems: [
      { id: '2.1', title: 'Filosofi' },
      { id: '2.2', title: 'Valores' },
      { id: '2.3', title: 'Desvalores' }
    ]
  },
  {
    id: '3',
    title: 'Verbal',
    subitems: [
      { id: '3.1', title: 'Personalidade' },
      { id: '3.2', title: 'Conceitos' },
      { id: '3.3', title: 'Vocabulário' },
      { id: '3.4', title: 'Exemplos' },
      { id: '3.5', title: 'Prompt' }
    ]
  },
  {
    id: '4',
    title: 'Logotipo',
    subitems: [
      { id: '4.1', title: 'Logo' },
      { id: '4.2', title: 'Tipo' },
      { id: '4.3', title: 'Variações' },
      { id: '4.4', title: 'Margem de Segurança' }
    ]
  },
  {
    id: '5',
    title: 'Cores',
    subitems: [
      { id: '5.1', title: 'Contexto' },
      { id: '5.2', title: 'Cores INstitucionais' }
    ]
  },
  {
    id: '6',
    title: 'Tipografia',
    subitems: [
      { id: '6.1', title: 'Principal' },
      { id: '6.2', title: 'Apoio' },
      { id: '6.3', title: 'Uso' }
    ]
  },
  {
    id: '7',
    title: 'Apoio Gráfico',
    subitems: [
      { id: '7.1', title: 'Mola Emendada' },
      { id: '7.2', title: 'Caixa Emendada' },
      { id: '7.3', title: 'Gráfico Emendado' }
    ]
  },
  {
    id: '8',
    title: 'Iconografia',
    subitems: [
      { id: '8.1', title: 'Guia' },
      { id: '8.2', title: 'Exemplos' }
    ]
  },
  {
    id: '9',
    title: 'Inspirações',
    subitems: [{ id: '9.1', title: 'Preços' }]
  }
]
