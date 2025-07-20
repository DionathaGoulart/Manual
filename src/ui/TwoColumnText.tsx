import React from 'react'

// Tipos para as propriedades do componente
export type TwoColumnTextProps = {
  leftTitle: string // Título da coluna esquerda
  leftParagraph: string // Parágrafo da coluna esquerda
  rightTitle: string // Título da coluna direita
  rightParagraph: string // Parágrafo da coluna direita
  gap?: string // Espaçamento entre as colunas (ex: 'gap-8', 'gap-4')
  className?: string // Classes CSS adicionais para o container principal
  titleClassName?: string // Classes CSS adicionais para os títulos
  paragraphClassName?: string // Classes CSS adicionais para os parágrafos
}

const TwoColumnText: React.FC<TwoColumnTextProps> = ({
  leftTitle,
  leftParagraph,
  rightTitle,
  rightParagraph,
  gap = 'gap-8', // Gap padrão de 32px
  className = '',
  titleClassName = 'text-2xl font-bold text-gray-800 mb-4', // Estilo padrão para títulos
  paragraphClassName = 'text-base text-gray-600 leading-relaxed' // Estilo padrão para parágrafos
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${gap} ${className}`}>
      {/* Coluna Esquerda */}
      <div>
        <h2 className={titleClassName}>{leftTitle}</h2>
        <p className={paragraphClassName}>{leftParagraph}</p>
      </div>

      {/* Coluna Direita */}
      <div>
        <h2 className={titleClassName}>{rightTitle}</h2>
        <p className={paragraphClassName}>{rightParagraph}</p>
      </div>
    </div>
  )
}

export default TwoColumnText
