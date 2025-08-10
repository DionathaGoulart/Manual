import React from 'react'
import { TitleVariant, TitleProps } from '@/types/Uis'

// ============================================================================
// CONSTANTES
// ============================================================================
const VARIANT_CLASSES: Record<TitleVariant, string> = {
  large: 'text-4xl md:text-6xl', // Mobile: 36px, Desktop: 60px
  small: 'text-xl md:text-2xl' // Mobile: 20px, Desktop: 24px
}

const MARGIN_BOTTOM_CLASSES: Record<TitleVariant, string> = {
  large: 'mb-8',
  small: 'mb-2'
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
  bold = true,
  align = 'center',
  className = ''
}) => {
  // Define a tag automaticamente baseada na variante se não especificada
  const Component = as || DEFAULT_TAGS[variant]
  const isCustomColorValue = color && isCustomColor(color)

  const classes = [
    'font-avantique',
    MARGIN_BOTTOM_CLASSES[variant], // Margin bottom baseado na variante
    VARIANT_CLASSES[variant],
    'leading-[100%]',
    'tracking-[-2%]',
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
