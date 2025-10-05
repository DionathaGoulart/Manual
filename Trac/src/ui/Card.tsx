import React from 'react'

import { ColorVariant, CardProps } from '@/types/Uis'
import Text from './Text'
import Title from './Tittle'

// ================================
// CONSTANTES
// ================================

const COLOR_VARIANTS: Record<ColorVariant, { bg: string; textColor: string }> = {
  1: {
    bg: '#FF5733',
    textColor: '#212121'
  },
  2: {
    bg: '#212121',
    textColor: '#F9F9F9'
  },
  3: {
    bg: '#F9F9F9',
    textColor: '#212121'
  },
  4: {
    bg: '#33FF70',
    textColor: '#212121'
  },
  5: {
    bg: '#FFD433',
    textColor: '#191919'
  }
}

const DEFAULT_CLASSNAME = ''

// ================================
// COMPONENTE PRINCIPAL
// ================================

/**
 * Componente de card com layout de duas colunas.
 * Exibe títulos à esquerda e lista de itens à direita.
 * @param leftTitle - Título principal do lado esquerdo
 * @param leftSubtitle - Subtítulo do lado esquerdo
 * @param rightItems - Lista de itens do lado direito
 * @param colorVariant - Variante de cor do card
 * @param className - Classes CSS adicionais
 */
const Card: React.FC<CardProps> = ({
  leftTitle,
  leftSubtitle,
  rightItems,
  colorVariant,
  className = DEFAULT_CLASSNAME
}) => {
  const colors = COLOR_VARIANTS[colorVariant]

  return (
    <div
      className={`w-full rounded-xl p-6 ${className}`}
      style={{ backgroundColor: colors.bg }}
    >
      <div className="flex justify-between items-center px-6 py-2">
        {/* Lado Esquerdo - Títulos */}
        <div className="flex flex-col space-y-2">
          <Title
            variant="small"
            color={colors.textColor}
            align="left"
            className="mb-0"
          >
            {leftTitle}
          </Title>
          <Title
            variant="small"
            color={colors.textColor}
            align="left"
            className="mb-0"
          >
            {leftSubtitle}
          </Title>
        </div>

        {/* Lado Direito - Lista */}
        <div className="flex flex-col space-y-1">
          {rightItems.map((item, index) => (
            <Text
              key={index}
              variant="medium"
              as="span"
              color={colors.textColor}
              bulletColor={colors.textColor}
            >
              {item}
            </Text>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
