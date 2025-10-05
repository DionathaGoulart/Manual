import { ReactNode } from 'react'

// ================================
// BOTÕES
// ================================

/**
 * Variantes de cor disponíveis para componentes.
 */
export type ColorVariant = 1 | 2 | 3 | 4 | 5

/**
 * Propriedades do componente Button.
 * @property text - Texto exibido no botão
 * @property onClick - Callback executado ao clicar no botão
 * @property icon - Ícone a ser exibido no botão
 * @property variant - Variante visual do botão
 * @property size - Tamanho do botão
 * @property disabled - Se o botão está desabilitado
 * @property className - Classes CSS adicionais
 */
export interface ButtonProps {
  text: string
  onClick: () => void
  icon?: 'download' | 'upload' | 'none'
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
}

// ================================
// CARDS
// ================================

/**
 * Propriedades do componente Card.
 * @property leftTitle - Título do lado esquerdo
 * @property leftSubtitle - Subtítulo do lado esquerdo
 * @property rightItems - Lista de itens do lado direito
 * @property colorVariant - Variante de cor do card
 * @property className - Classes CSS adicionais
 */
export interface CardProps {
  leftTitle?: string
  leftSubtitle?: string
  rightItems: string[]
  colorVariant: ColorVariant
  className?: string
}

// ================================
// IMAGENS
// ================================

/**
 * Propriedades do componente ImageGrid.
 * @property variant - Variante de layout da grade
 * @property images - Lista de URLs das imagens
 * @property tall - Se as imagens devem ter altura maior
 * @property bgColors - Cores de fundo customizáveis
 * @property fullImage - Se a imagem deve ocupar 100% do card
 */
export interface ImageGridProps {
  variant?: 1 | 2 | 3
  images?: string[]
  tall?: boolean
  bgColors?: string[]
  fullImage?: boolean
}

// ================================
// TÍTULOS
// ================================

/**
 * Variantes de tamanho para títulos.
 */
export type TitleVariant = 'large' | 'small'

/**
 * Propriedades do componente Title.
 * @property children - Conteúdo do título
 * @property variant - Variante de tamanho
 * @property as - Elemento HTML a ser renderizado
 * @property color - Cor do texto
 * @property bold - Se o texto deve ser negrito
 * @property align - Alinhamento do texto
 * @property className - Classes CSS adicionais
 */
export interface TitleProps {
  children: React.ReactNode
  variant?: TitleVariant
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  color?: string
  bold?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
}

// ================================
// TEXTOS
// ================================

/**
 * Variantes de tamanho para textos.
 */
export type TextVariant = 'large' | 'medium' | 'small'

/**
 * Propriedades do componente Text.
 * @property children - Conteúdo do texto
 * @property variant - Variante de tamanho
 * @property as - Elemento HTML a ser renderizado
 * @property color - Cor do texto
 * @property bulletColor - Cor dos bullets (para listas)
 * @property uppercase - Se o texto deve ser maiúsculo
 * @property lowercase - Se o texto deve ser minúsculo
 * @property align - Alinhamento do texto
 * @property className - Classes CSS adicionais
 * @property maxWidth - Se deve aplicar largura máxima
 */
export interface TextProps {
  children: React.ReactNode
  variant?: TextVariant
  as?: 'p' | 'span' | 'div' | 'li'
  color?: string
  bulletColor?: string
  uppercase?: boolean
  lowercase?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
  maxWidth?: boolean
}

// ================================
// TEXTO EM DUAS COLUNAS
// ================================

/**
 * Propriedades do componente TwoColumnText.
 * @property mainTitle - Título principal da seção
 * @property leftTitle - Título da coluna esquerda
 * @property leftParagraph - Parágrafo da coluna esquerda
 * @property rightTitle - Título da coluna direita
 * @property rightParagraph - Parágrafo da coluna direita
 * @property gap - Espaçamento entre as colunas
 * @property className - Classes CSS adicionais
 * @property titleClassName - Classes CSS para os títulos
 * @property paragraphClassName - Classes CSS para os parágrafos
 */
export interface TwoColumnTextProps {
  mainTitle?: string
  leftTitle?: string
  leftParagraph: string | ReactNode
  rightTitle?: string
  rightParagraph: string | ReactNode
  gap?: string
  className?: string
  titleClassName?: string
  paragraphClassName?: string
}
