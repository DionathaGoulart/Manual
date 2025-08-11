import React from 'react'
import { ImageGridProps } from '@/types/Uis'

const ImageGrid: React.FC<ImageGridProps> = ({
  variant = 1,
  images = [],
  tall = false,
  bgColors = [], // Array de cores de fundo
  fullImage = false, // Por padrão false (mantém padding)
  flexibleAspect = false, // Por padrão false (mantém aspecto 1:1)
  colorVariant = 1 // Por padrão usa a cor azul
}) => {
  // Configurações para cada variante
  const configs = {
    1: {
      containerClass: 'flex items-center justify-center py-1 w-full',
      itemClass: `${fullImage ? '' : 'p-16'} ${
        flexibleAspect
          ? `w-full ${tall ? 'h-100' : 'h-64'}`
          : `w-full ${tall ? 'h-96' : 'aspect-square'}`
      } flex items-center justify-center overflow-hidden`,
      gap: '',
      maxImages: 1
    },
    2: {
      containerClass: 'flex gap-1 w-full',
      itemClass: `${fullImage ? '' : 'p-16'} ${
        flexibleAspect
          ? `flex-1 ${tall ? 'h-96' : 'h-64'}`
          : `flex-1 ${tall ? 'h-96' : 'h-64'}`
      } flex items-center justify-center overflow-hidden`,
      gap: 'gap-1',
      maxImages: 2
    },
    3: {
      containerClass: 'flex gap-0 py-3 w-full',
      itemClass: `${fullImage ? '' : 'p-4'} ${
        flexibleAspect
          ? `flex-1 ${tall ? 'h-96' : 'h-64'}`
          : `flex-1 ${tall ? 'h-96' : 'aspect-square'}`
      } flex items-center justify-center overflow-hidden`,
      gap: 'gap-1',
      maxImages: 3
    },
    4: {
      containerClass: 'flex gap-1 justify-center py-0.5 w-full',
      itemClass: `${fullImage ? '' : 'p-3'} ${
        flexibleAspect
          ? `flex-1 ${tall ? 'h-80' : 'h-28'}`
          : `flex-1 ${tall ? 'h-80' : 'h-28'}`
      } flex items-center justify-center overflow-hidden`,
      gap: 'gap-1',
      maxImages: 5
    }
  }

  const config = configs[variant] || configs[1]

  // Limita o número de imagens baseado na variante
  const displayImages = images.slice(0, config.maxImages)

  // Se não houver imagens suficientes, usa imagem padrão
  const finalImages = []
  for (let i = 0; i < config.maxImages; i++) {
    finalImages.push(displayImages[i] || 'https://picsum.photos/400')
  }

  // Cores disponíveis para a variante 4
  const variant4Colors = {
    1: '#0B6AF4', // Azul
    2: '#131314', // Preto/cinza escuro
    3: '#FFFFFF' // Branco
  }

  // Função para obter a cor de fundo para cada índice
  const getBgColor = (index: number): string => {
    // Se for variante 4, usa a cor baseada na colorVariant
    if (variant === 4) {
      return variant4Colors[colorVariant] || variant4Colors[1]
    }
    return bgColors[index] || '#212121' // Cor padrão se não especificada
  }

  return (
    <div className={config.containerClass}>
      {finalImages.map((src, index) => (
        <div
          key={index}
          className={config.itemClass}
          style={{ backgroundColor: getBgColor(index) }}
        >
          <img
            src={src}
            alt={`Imagem ${index + 1}`}
            className={`h-full w-full ${fullImage ? 'object-cover' : 'object-contain'}`}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
