import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import Card from '@/ui/Card'

const PrimariasSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Cores Principais
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Clique sobre qualquer código de cor para copiá-lo instantaneamente e
          garantir a aplicação exata.
        </Text>
        <Card
          leftTitle="Laranja"
          leftSubtitle="Tracionado"
          rightItems={[
            'HEX: #FF5733',
            'CMYK: 00, 76, 77, 00',
            'RGB: 255, 087, 051'
          ]}
          colorVariant={1}
        />
        <Card
          leftTitle="Preto"
          leftSubtitle="Tracionado"
          rightItems={[
            'HEX: #191919',
            'CMYK: 00, 00, 00, 90',
            'RGB: 025, 025, 025'
          ]}
          colorVariant={2}
        />
        <Card
          leftTitle="Branco"
          leftSubtitle="Tracionado"
          rightItems={[
            'HEX: #F9F9F9',
            'CMYK: 00, 00, 00, 02',
            'RGB: 249, 249, 249'
          ]}
          colorVariant={3}
        />
      </div>
    </>
  )
}

export default PrimariasSection
