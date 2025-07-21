import React from 'react'

// ============================================================================
// TIPOS
// ============================================================================

export type TwoColumnTextProps = {
  leftTitle: string
  leftParagraph: string
  rightTitle: string
  rightParagraph: string
  gap?: string
  className?: string
  titleClassName?: string
  paragraphClassName?: string
}

// ============================================================================
// COMPONENTE
// ============================================================================

const TwoColumnText: React.FC<TwoColumnTextProps> = ({
  leftTitle,
  leftParagraph,
  rightTitle,
  rightParagraph,
  gap = 'gap-8',
  className = '',
  titleClassName = 'text-2xl font-bold text-gray-800 mb-4',
  paragraphClassName = 'text-base text-gray-600 leading-relaxed'
}) => {
  const gridClasses = `grid grid-cols-1 md:grid-cols-2 ${gap} ${className}`

  return (
    <div className={gridClasses}>
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
