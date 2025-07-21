import React from 'react'

// ============================================================================
// TIPOS
// ============================================================================

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Leading = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

export type TextProps = {
  children: React.ReactNode
  as?: 'p' | 'span' | 'div' | 'li'
  color?: string
  bulletColor?: string
  uppercase?: boolean
  lowercase?: boolean
  size?: TextSize
  align?: 'left' | 'center' | 'right'
  leading?: Leading
  className?: string
}

// ============================================================================
// CONSTANTES
// ============================================================================

const SIZE_CLASSES: Record<TextSize, string> = {
  xs: 'text-sm', // ~14px (próximo de 13px)
  sm: 'text-base', // ~16px (próximo de 15px)
  md: 'text-lg', // ~18px (próximo de 19px)
  lg: 'text-xl', // ~20px
  xl: 'text-2xl' // ~24px
}

const ALIGN_CLASSES: Record<'left' | 'center' | 'right', string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const LEADING_CLASSES: Record<Leading, string> = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose'
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
  as = 'p',
  color = '',
  bulletColor,
  uppercase = false,
  lowercase = false,
  size = 'md',
  align = as === 'li' ? 'left' : 'center',
  leading = 'relaxed',
  className = 'text-text-muted'
}) => {
  const Component = as
  const isCustomColorValue = color && isCustomColor(color)

  // Classes base compartilhadas
  const baseClasses = [
    'font-lt-superior',
    SIZE_CLASSES[size],
    'font-normal',
    'tracking-wide',
    ALIGN_CLASSES[align],
    LEADING_CLASSES[leading],
    uppercase && 'uppercase',
    lowercase && 'lowercase',
    !isCustomColorValue && color,
    className
  ]
    .filter(Boolean)
    .join(' ')

  const style = isCustomColorValue ? { color } : {}

  // Renderização específica para li (com bullet)
  if (as === 'li') {
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
