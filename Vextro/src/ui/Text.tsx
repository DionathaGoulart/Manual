import React from 'react'
import { TextVariant, TextProps } from '@/types/Uis'

// ============================================================================
// CONSTANTES
// ============================================================================

const VARIANT_CLASSES: Record<TextVariant, string> = {
  large: 'text-base md:text-lg leading-7 md:leading-7 tracking-wider', // Mobile: 16px, Desktop: 18px, Line height: 28px, Letter spacing: 0.05em (~5%)
  medium: 'text-sm md:text-base leading-6 md:leading-6 tracking-wider', // Mobile: 14px, Desktop: 16px, Line height: 24px, Letter spacing: 0.05em (~5%)
  small: 'text-xs md:text-sm leading-5 md:leading-5 tracking-wider' // Mobile: 12px, Desktop: 14px, Line height: 20px, Letter spacing: 0.05em (~5%)
}

const DEFAULT_TAGS: Record<TextVariant, 'p' | 'span'> = {
  large: 'p', // 9px
  medium: 'span', // 15px
  small: 'p' // 3px
}

const WEIGHT_CLASSES: Record<TextVariant, string> = {
  large: 'font-light', // 400 regular (Avantique-Regular.otf)
  medium: 'font-light', // 500 medium (Avantique-Medium.otf)
  small: 'font-light' // 300 light (Avantique-Light.otf)
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
  className = ''
}) => {
  // Define a tag automaticamente baseada na variante se não especificada
  const Component = as || DEFAULT_TAGS[variant]
  const isCustomColorValue = color && isCustomColor(color)

  // Classes base compartilhadas
  const baseClasses = [
    'font-avantique',
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
