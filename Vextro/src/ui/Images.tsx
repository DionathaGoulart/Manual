import React from 'react'

interface ImageGridProps {
  variant?: 1 | 2 | 3
  images?: string[]
  tall?: boolean
  bgColors?: string[] // Nova prop para cores de fundo customizáveis
  fullImage?: boolean // Nova prop para imagem ocupar 100% do card
  flexibleAspect?: boolean // Nova prop para não forçar 1:1
}

const ImageGrid: React.FC<ImageGridProps> = ({
  variant = 1,
  images = [],
  tall = false,
  bgColors = [], // Array de cores de fundo
  fullImage = false, // Por padrão false (mantém padding)
  flexibleAspect = false // Por padrão false (mantém aspecto 1:1)
}) => {
  // Configurações para cada variante
  const configs = {
    1: {
      containerClass: 'flex items-center justify-center py-1',
      itemClass: `${fullImage ? '' : 'p-16'} ${
        flexibleAspect
          ? `w-full ${tall ? 'h-96' : 'h-64'}`
          : `w-[570px] ${tall ? 'h-96' : 'h-[570px]'}`
      } flex items-center justify-center overflow-hidden`,
      gap: '',
      maxImages: 1
    },
    2: {
      containerClass: 'flex gap-6',
      itemClass: `${fullImage ? '' : 'p-16'} ${
        flexibleAspect
          ? `flex-1 ${tall ? 'h-96' : 'h-64'}`
          : `${tall ? 'h-96' : 'h-64'} w-64`
      } flex items-center justify-center overflow-hidden`,
      gap: 'gap-7',
      maxImages: 2
    },
    3: {
      containerClass: 'flex gap-6 py-3',
      itemClass: `${fullImage ? '' : 'p-4'} ${
        flexibleAspect
          ? `flex-1 ${tall ? 'h-96' : 'h-64'}`
          : `w-44 ${tall ? 'h-96' : 'h-44'}`
      } flex items-center justify-center overflow-hidden`,
      gap: 'gap-4',
      maxImages: 3
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

  // Função para obter a cor de fundo para cada índice
  const getBgColor = (index: number): string => {
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
