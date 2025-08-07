import React from 'react'
import Title from './Tittle'
import Text from './Text'

// ============================================================================
// TIPOS
// ============================================================================
type ColorVariant = 1 | 2 | 3 | 4 | 5

export type CardProps = {
  leftTitle?: string
  leftSubtitle?: string
  rightItems: string[]
  colorVariant: ColorVariant
  className?: string
}

// ============================================================================
// CONSTANTES
// ============================================================================
const COLOR_VARIANTS: Record<ColorVariant, { bg: string; textColor: string }> =
  {
    1: {
      bg: '#0B6AF4',
      textColor: '#212121'
    },
    2: {
      bg: '#101010',
      textColor: '#F9F9F9'
    },
    3: {
      bg: '#FFFFFF',
      textColor: '#212121'
    },
    4: {
      bg: '#FFFFFF',
      textColor: '#212121'
    },
    5: {
      bg: '#FFD433',
      textColor: '#191919'
    }
  }

// ============================================================================
// COMPONENTE
// ============================================================================
const Card: React.FC<CardProps> = ({
  leftTitle,
  leftSubtitle,
  rightItems,
  colorVariant,
  className = ''
}) => {
  const colors = COLOR_VARIANTS[colorVariant]
  const hasSubtitle = leftSubtitle && leftSubtitle.trim() !== ''

  return (
    <div
      className={`w-full p-4 ${className}`}
      style={{ backgroundColor: colors.bg }}
    >
      <div className="flex justify-between items-center px-6">
        {/* Lado Esquerdo - Títulos */}
        <div
          className={`flex flex-col ${hasSubtitle ? 'space-y-2' : 'justify-center mt-5'}`}
        >
          <Title
            variant="small"
            color={colors.textColor}
            align="left"
            className="mb-0"
          >
            {leftTitle}
          </Title>
          {hasSubtitle && (
            <Title
              variant="small"
              color={colors.textColor}
              align="left"
              className="mb-0"
            >
              {leftSubtitle}
            </Title>
          )}
        </div>

        {/* Lado Direito - Lista */}
        <div className="flex flex-col space-y-1">
          {rightItems.map((item, index) => (
            <Text
              key={index}
              variant="small"
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
