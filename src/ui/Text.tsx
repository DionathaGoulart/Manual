import React from 'react'

type TextProps = {
  children: React.ReactNode
  as?: 'p' | 'span' | 'div' | 'li'
  color?: string
  bulletColor?: string
  uppercase?: boolean
  lowercase?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'left' | 'center' | 'right'
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | string
  className?: string
}

const Text: React.FC<TextProps> = ({
  children,
  as = 'p',
  color = '',
  bulletColor,
  uppercase = false,
  lowercase = false,
  size = 'md', // Alterado para 'md' como padrão, próximo a 19px
  align = as === 'li' ? 'left' : 'center',
  // expanded = false, // Removido, já que a fonte é específica
  leading = 'relaxed', // Alterado para 'relaxed' para um line-height de 27px (para 19px de fonte)
  className = 'text-text-muted' // Cor padrão se nenhuma for especificada
}) => {
  // Função para processar quebras de linha
  const processText = (text: React.ReactNode) => {
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

  // Mapeamento de tamanhos para se aproximar de 13px, 15px, 19px
  // Os valores do Tailwind são baseados em rem, então converti para px para referência
  const sizeClasses = {
    // 13px (~0.8125rem)
    xs: 'text-sm', // Tailwind default: 14px (próximo de 13px)
    // 15px (~0.9375rem)
    sm: 'text-base', // Tailwind default: 16px (próximo de 15px)
    // 19px (~1.1875rem)
    md: 'text-lg', // Tailwind default: 18px (próximo de 19px)
    lg: 'text-xl', // Tailwind default: 20px
    xl: 'text-2xl' // Tailwind default: 24px
  }

  // Mapeamento de alinhamentos
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  // Mapeamento de line-height (mantido, mas com 'relaxed' como padrão)
  const leadingClasses = {
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed', // ~1.625 (para 19px: 19 * 1.625 = 30.875px)
    loose: 'leading-loose'
  }

  const Component = as

  const isHexOrRgbColor = color.startsWith('#') || color.startsWith('rgb')

  // Se for li, renderiza com bullet
  if (as === 'li') {
    return (
      <Component
        className={`
          font-lt-superior
          ${sizeClasses[size]}
          font-normal
          ${uppercase ? 'uppercase' : ''}
          ${lowercase ? 'lowercase' : ''}
          ${leadingClasses[leading as keyof typeof leadingClasses]}
          tracking-wide
          ${alignClasses[align]}
          flex items-center gap-2
          ${className}
        `}
        style={{ color }}
      >
        {/* Bullet personalizado */}
        <span style={{ color: bulletColor || color }}>•</span>

        {/* Conteúdo do item */}
        <span className="flex-1">{processText(children)}</span>
      </Component>
    )
  }

  // Renderização normal para p e span
  return (
    <Component
      className={`
        font-lt-superior
        ${sizeClasses[size]}
        font-normal
        ${uppercase ? 'uppercase' : ''}
        ${lowercase ? 'lowercase' : ''}
        ${leadingClasses[leading as keyof typeof leadingClasses]}
        tracking-wide
        ${alignClasses[align]}
        ${!isHexOrRgbColor ? color : ''}
        ${className}
      `}
      style={isHexOrRgbColor ? { color } : {}}
    >
      {processText(children)}
    </Component>
  )
}
export default Text
