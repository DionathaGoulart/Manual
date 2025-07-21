import React from 'react'

// ============================================================================
// TIPOS
// ============================================================================

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type TitleProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  color?: string
  uppercase?: boolean
  lowercase?: boolean
  bold?: boolean
  size?: TitleSize
  align?: 'left' | 'center' | 'right'
  className?: string
}

// ============================================================================
// CONSTANTES
// ============================================================================

const SIZE_CLASSES: Record<TitleSize, string> = {
  xs: 'text-base', // ~16px (próximo de 15px)
  sm: 'text-2xl', // ~24px (próximo de 27px)
  md: 'text-4xl', // ~36px
  lg: 'text-5xl', // ~48px (próximo de 43px)
  xl: 'text-6xl' // ~60px
}

const ALIGN_CLASSES: Record<'left' | 'center' | 'right', string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

// ============================================================================
// UTILITÁRIOS
// ============================================================================

const processText = (text: React.ReactNode): React.ReactNode => {
  if (typeof text === 'string') {
    return text.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ))
  }
  return text
}

const isCustomColor = (color: string): boolean =>
  color.startsWith('#') || color.startsWith('rgb')

// ============================================================================
// COMPONENTE
// ============================================================================

const Title: React.FC<TitleProps> = ({
  children,
  as = 'h1',
  color = '',
  uppercase = false,
  lowercase = false,
  bold = true,
  size = 'lg',
  align = 'center',
  className = 'text-text'
}) => {
  const Component = as
  const isCustomColorValue = color && isCustomColor(color)

  const classes = [
    'font-lt-superior-serif',
    SIZE_CLASSES[size],
    'leading-tight',
    'tracking-normal',
    ALIGN_CLASSES[align],
    bold && 'font-bold',
    uppercase && 'uppercase',
    lowercase && 'lowercase',
    !isCustomColorValue && color,
    className
  ]
    .filter(Boolean)
    .join(' ')

  const style = isCustomColorValue ? { color } : {}

  return (
    <Component className={classes} style={style}>
      {processText(children)}
    </Component>
  )
}

export default Title
