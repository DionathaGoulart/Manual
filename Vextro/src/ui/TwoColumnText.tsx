import React, { ReactNode } from 'react'
import { TwoColumnTextProps } from '@/types/Uis'

// ============================================================================
// COMPONENTE
// ============================================================================
const TwoColumnText: React.FC<TwoColumnTextProps> = ({
  mainTitle,
  leftTitle,
  leftParagraph,
  rightParagraph,
  rightTitle,
  gap = 'gap-8',
  className = '',
  titleClassName = '',
  paragraphClassName = ''
}) => {
  // Classes base que sempre serão aplicadas
  const baseTitleClasses =
    'text-white font-avantique text-2xl font-medium uppercase leading-none tracking-normal mb-5'
  const baseParagraphClasses =
    'text-white font-avantique text-sm font-light leading-5 tracking-wide'

  // Classes finais combinando base + customização
  const finalTitleClasses = `${baseTitleClasses} ${titleClassName}`
  const finalParagraphClasses = `${baseParagraphClasses} ${paragraphClassName}`

  const gridClasses = `grid grid-cols-1 md:grid-cols-2 ${gap} ${className}`

  return (
    <div>
      {/* Título Principal (opcional) */}
      {/* Aplicando a mesma classe titleClassName aqui */}
      {mainTitle && (
        <h1 className={`${finalTitleClasses} text-start`}>{mainTitle}</h1>
      )}

      <div className={gridClasses}>
        {/* Coluna Esquerda */}
        <div>
          {leftTitle && <h2 className={finalTitleClasses}>{leftTitle}</h2>}
          <p className={finalParagraphClasses}>{leftParagraph}</p>
        </div>

        {/* Coluna Direita */}
        <div>
          {rightTitle && <h2 className={finalTitleClasses}>{rightTitle}</h2>}
          <p className={finalParagraphClasses}>{rightParagraph}</p>
        </div>
      </div>
    </div>
  )
}

export default TwoColumnText
