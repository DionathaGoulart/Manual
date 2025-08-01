import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const InspiSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Inspirações
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Aqui, você vê nossa identidade em movimento, tanto no mundo online,
          quanto no offline. Cada exemplo é a materialização da nossa crença: o
          acompanhamento (tracking) é o que acumula a energia para o avanço real
          (traction).
        </Text>
      </div>
    </>
  )
}

export default InspiSection
