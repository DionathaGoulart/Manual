import React from 'react'

// ============================================================================
// TIPOS
// ============================================================================
type TitleVariant = 'large' | 'small'

export type TitleProps = {
  children: React.ReactNode
  variant?: TitleVariant
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  color?: string
  bold?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
}

// ============================================================================
// CONSTANTES
// ============================================================================
const VARIANT_CLASSES: Record<TitleVariant, string> = {
  large: 'text-[51px]', // 51px exato
  small: 'text-[23px]' // 23px exato
}

const DEFAULT_TAGS: Record<TitleVariant, 'h2' | 'h3'> = {
  large: 'h2',
  small: 'h3'
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
  variant = 'large',
  as,
  color = '',
  bold = false,
  align = 'center',
  className = ''
}) => {
  // Define a tag automaticamente baseada na variante se não especificada
  const Component = as || DEFAULT_TAGS[variant]

  const isCustomColorValue = color && isCustomColor(color)

  const classes = [
    'font-orbit-gate',
    VARIANT_CLASSES[variant],
    'leading-[100%]',
    'tracking-[0%]',
    'uppercase',
    ALIGN_CLASSES[align],
    bold ? 'font-bold' : 'font-normal',
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
