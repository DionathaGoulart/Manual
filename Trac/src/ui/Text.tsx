import React from 'react'

import { TextVariant, TextProps } from '@/types/Uis'

// ================================
// CONSTANTES
// ================================

const VARIANT_CLASSES: Record<TextVariant, string> = {
  large: 'text-base md:text-lg leading-6 md:leading-7', // Mobile: 16px, Desktop: 18px
  medium: 'text-sm md:text-base leading-5 md:leading-snug', // Mobile: 14px, Desktop: 16px
  small: 'text-xs md:text-sm leading-4 md:leading-tight' // Mobile: 12px, Desktop: 14px
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

const DEFAULT_VARIANT = 'large'
const DEFAULT_COLOR = ''
const DEFAULT_UPPERCASE = false
const DEFAULT_LOWERCASE = false
const DEFAULT_ALIGN = 'left'
const DEFAULT_CLASSNAME = ''
const DEFAULT_MAX_WIDTH = true

// ================================
// FUNÇÕES AUXILIARES
// ================================

/**
 * Processa texto quebrando linhas em <br> tags.
 * @param text - Conteúdo a ser processado
 * @returns Conteúdo processado com quebras de linha
 */
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

/**
 * Verifica se a cor é customizada (hex ou rgb).
 * @param color - Cor a ser verificada
 * @returns boolean indicando se é cor customizada
 */
const isCustomColor = (color: string): boolean =>
  color.startsWith('#') || color.startsWith('rgb')

// ================================
// COMPONENTE PRINCIPAL
// ================================

/**
 * Componente de texto reutilizável com suporte a variantes e formatação.
 * @param children - Conteúdo do texto
 * @param variant - Variante de tamanho
 * @param as - Elemento HTML a ser renderizado
 * @param color - Cor do texto
 * @param bulletColor - Cor dos bullets (para listas)
 * @param uppercase - Se o texto deve ser maiúsculo
 * @param lowercase - Se o texto deve ser minúsculo
 * @param align - Alinhamento do texto
 * @param className - Classes CSS adicionais
 * @param maxWidth - Se deve aplicar largura máxima
 */
const Text: React.FC<TextProps> = ({
  children,
  variant = DEFAULT_VARIANT,
  as,
  color = DEFAULT_COLOR,
  bulletColor,
  uppercase = DEFAULT_UPPERCASE,
  lowercase = DEFAULT_LOWERCASE,
  align = DEFAULT_ALIGN,
  className = DEFAULT_CLASSNAME,
  maxWidth = DEFAULT_MAX_WIDTH
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
