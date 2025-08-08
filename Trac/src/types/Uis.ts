import { ReactNode } from 'react'

// Btn //
export interface ButtonProps {
  text: string
  onClick: () => void
  icon?: 'download' | 'upload' | 'none'
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
}

// Cards //
export type ColorVariant = 1 | 2 | 3 | 4 | 5

export type CardProps = {
  leftTitle?: string
  leftSubtitle?: string
  rightItems: string[]
  colorVariant: ColorVariant
  className?: string
}

// Images //
export interface ImageGridProps {
  variant?: 1 | 2 | 3
  images?: string[]
  tall?: boolean
  bgColors?: string[] // Nova prop para cores de fundo customizáveis
  fullImage?: boolean // Nova prop para imagem ocupar 100% do card
}

// Titles //
export type TitleVariant = 'large' | 'small'

export type TitleProps = {
  children: React.ReactNode
  variant?: TitleVariant
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  color?: string
  bold?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
}

// Texts //
export type TextVariant = 'large' | 'medium' | 'small'

export type TextProps = {
  children: React.ReactNode
  variant?: TextVariant
  as?: 'p' | 'span' | 'div' | 'li'
  color?: string
  bulletColor?: string
  uppercase?: boolean
  lowercase?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
  maxWidth?: boolean // Nova prop para controlar se aplica max-width
}

// TwoColumn //
export type TwoColumnTextProps = {
  mainTitle?: string // Novo prop para o título principal
  leftTitle?: string
  leftParagraph: string | ReactNode
  rightTitle?: string
  rightParagraph: string | ReactNode
  gap?: string
  className?: string
  // Removendo mainTitleClassName, pois vamos usar titleClassName
  titleClassName?: string
  paragraphClassName?: string
}
