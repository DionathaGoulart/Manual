import React from 'react'

// ============================================================================
// TIPOS
// ============================================================================
type TextVariant = 'large' | 'medium' | 'small'

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

// ============================================================================
// CONSTANTES
// ============================================================================
const VARIANT_CLASSES: Record<TextVariant, string> = {
  large: 'text-lg leading-7', // 19px com line-height 27px
  medium: 'text-base leading-snug', // 15px com line-height proporcional
  small: 'text-sm leading-tight' // 13px com line-height proporcional
}

const DEFAULT_TAGS: Record<TextVariant, 'p' | 'span'> = {
  large: 'p', // p para 19px
  medium: 'span', // span para 15px
  small: 'p' // p para 13px
}

const WEIGHT_CLASSES: Record<TextVariant, string> = {
  large: 'font-normal', // 400 regular
  medium: 'font-semibold', // 600 semibold
  small: 'font-normal' // 400 regular
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
const Text: React.FC<TextProps> = ({
  children,
  variant = 'large',
  as,
  color = '',
  bulletColor,
  uppercase = false,
  lowercase = false,
  align = 'left',
  className = '',
  maxWidth = true // Por padrão aplica o max-width
}) => {
  // Define a tag automaticamente baseada na variante se não especificada
  const Component = as || DEFAULT_TAGS[variant]
  const isCustomColorValue = color && isCustomColor(color)

  // Classes base compartilhadas
  const baseClasses = [
    'font-switzer',
    VARIANT_CLASSES[variant],
    WEIGHT_CLASSES[variant],
    ALIGN_CLASSES[align],
    uppercase && 'uppercase',
    lowercase && 'lowercase',
    !isCustomColorValue && color,
    className
  ]
    .filter(Boolean)
    .join(' ')

  const style = isCustomColorValue ? { color } : {}

  // Renderização específica para li (com bullet)
  if (Component === 'li') {
    return (
      <Component
        className={`${baseClasses} flex items-center gap-2`}
        style={style}
      >
        <span style={{ color: bulletColor || color }}>•</span>
        <span className="flex-1">{processText(children)}</span>
      </Component>
    )
  }

  // Renderização padrão
  return (
    <Component className={baseClasses} style={style}>
      {processText(children)}
    </Component>
  )
}

export default Text
