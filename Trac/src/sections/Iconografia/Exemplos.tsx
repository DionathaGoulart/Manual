import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const ExemplosGuiaSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Exemplos
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Abaixo estão os modelos prontos para uso. Use-os como inspiração e,
          mais importante, como a base para construir os próximos.
        </Text>

        <div>
          <ImageGrid
            variant={3}
            bgColors={['#212121', '#212121', '#212121']}
            images={['/ex1.svg', '/ex2.svg', '/ex3.svg']}
          />
          <ImageGrid
            variant={3}
            bgColors={['#212121', '#212121', '#212121']}
            images={['/ex4.svg', '/ex5.svg', '/ex6.svg']}
          />
          <ImageGrid
            variant={3}
            bgColors={['#212121', '#212121', '#212121']}
            images={['/ex7.svg', '/ex8.svg', '/ex9.svg']}
          />
        </div>
      </div>
    </>
  )
}

export default ExemplosGuiaSection
