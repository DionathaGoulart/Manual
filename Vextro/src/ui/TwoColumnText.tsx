import React, { ReactNode } from 'react'

// ============================================================================
// TIPOS
// ============================================================================
export type TwoColumnTextProps = {
  mainTitle?: string // Novo prop para o título principal
  leftTitle?: string
  leftParagraph: string | ReactNode
  rightTitle?: string
  rightParagraph: string | ReactNode
  gap?: string
  className?: string
  // Removendo mainTitleClassName, pois vamos usar titleClassName
  titleClassName?: string
  paragraphClassName?: string
}

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
    'text-2xl font-normal uppercase leading-none tracking-normal'
  const baseParagraphClasses = 'text-sm font-normal leading-5 tracking-wide'

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
