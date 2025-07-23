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
  // Usando a mesma classe para o título principal e os títulos das colunas
  titleClassName = 'text-2xl font-bold text-gray-800 mb-4',
  paragraphClassName = 'text-base text-gray-600 leading-relaxed'
}) => {
  const gridClasses = `grid grid-cols-1 md:grid-cols-2 ${gap} ${className}`

  return (
    <div>
      {/* Título Principal (opcional) */}
      {/* Aplicando a mesma classe titleClassName aqui */}
      {mainTitle && (
        <h1 className={`${titleClassName} text-start`}>{mainTitle}</h1>
      )}

      <div className={gridClasses}>
        {/* Coluna Esquerda */}
        <div>
          {leftTitle && <h2 className={titleClassName}>{leftTitle}</h2>}
          <p className={paragraphClassName}>{leftParagraph}</p>
        </div>

        {/* Coluna Direita */}
        <div>
          {rightTitle && <h2 className={titleClassName}>{rightTitle}</h2>}
          <p className={paragraphClassName}>{rightParagraph}</p>
        </div>
      </div>
    </div>
  )
}

export default TwoColumnText
