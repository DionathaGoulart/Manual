import React from 'react'

interface ImageGridProps {
  variant?: 1 | 2 | 3
  images?: string[]
  tall?: boolean
}

const ImageGrid: React.FC<ImageGridProps> = ({
  variant = 1,
  images = [],
  tall = false
}) => {
  // Configurações para cada variante
  const configs = {
    1: {
      containerClass: 'flex items-center justify-center py-8',
      itemClass: `bg-[#212121] p-16 rounded-3xl w-[570px] ${tall ? 'h-96' : 'h-[570px]'} flex items-center justify-center`,
      gap: '',
      maxImages: 1
    },
    2: {
      containerClass: 'flex gap-7 py-8',
      itemClass: `bg-[#212121] p-16 rounded-3xl ${tall ? 'h-96' : 'h-64'} w-64 flex items-center justify-center`,
      gap: 'gap-7',
      maxImages: 2
    },
    3: {
      containerClass: 'flex gap-4 py-8',
      itemClass: `bg-[#212121] p-4 rounded-3xl w-44 ${tall ? 'h-96' : 'h-44'} flex items-center justify-center`,
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

  return (
    <div className={config.containerClass}>
      {finalImages.map((src, index) => (
        <div key={index} className={config.itemClass}>
          <img
            src={src}
            alt={`Imagem ${index + 1}`}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
