import React from 'react'

type TitleProps = {
  children: React.ReactNode // Permite que o título receba texto, outros elementos JSX, etc.
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' // Tag HTML para renderizar o título
  color?: string // Cor do texto (pode ser nome Tailwind, hex, rgb)
  uppercase?: boolean // Transforma o texto em maiúsculas
  lowercase?: boolean // Transforma o texto em minúsculas
  bold?: boolean // Aplica negrito ao texto
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' // Tamanhos predefinidos para a fonte
  align?: 'left' | 'center' | 'right' // Alinhamento do texto
  className?: string // Classes CSS adicionais para customização
}

const Title: React.FC<TitleProps> = ({
  children,
  as = 'h1',
  color = '', // Mantém a flexibilidade para passar cores via props
  uppercase = false,
  lowercase = false,
  bold = true, // Alterado para true por padrão, refletindo o peso 700 da tipografia
  size = 'lg', // Alterado para 'lg' por padrão para se aproximar de 43px
  align = 'center',
  // expanded = false, // Removido, já que a fonte é específica
  className = 'text-text' // Cor padrão se nenhuma for especificada
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

  // Mapeamento de tamanhos para se aproximar de 43px, 27px, 15px
  // Os valores do Tailwind são baseados em rem, então converti para px para referência
  const sizeClasses = {
    // 15px (~0.9375rem)
    xs: 'text-base', // Tailwind default: 16px
    // 27px (~1.6875rem)
    sm: 'text-2xl', // Tailwind default: 24px (próximo de 27px)
    // 43px (~2.6875rem)
    md: 'text-4xl', // Tailwind default: 36px
    lg: 'text-5xl', // Tailwind default: 48px (próximo de 43px)
    xl: 'text-6xl' // Tailwind default: 60px
  }

  // Mapeamento de alinhamentos
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const Component = as

  // Verifica se a cor é um valor hexadecimal ou rgb para aplicar via style
  const isHexOrRgbColor = color.startsWith('#') || color.startsWith('rgb')

  return (
    <Component
      className={`
        font-lt-superior-serif
        ${sizeClasses[size]}
        ${bold ? 'font-bold' : ''}
        ${uppercase ? 'uppercase' : ''}
        ${lowercase ? 'lowercase' : ''}
        leading-tight
        tracking-normal
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

export default Title
