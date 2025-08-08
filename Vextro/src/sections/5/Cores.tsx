import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import Card from '@/ui/Card'

const CoresSection: React.FC = () => {
  return (
    <>
      <Title
        bold
        variant="large"
        align="left"
        className="text-white font-ss02 font-ss01 font-ligatures font-s002"
      >
        Palet a de Cores
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Clique sobre qualquer código de cor para copiá-lo instantaneamente e
          garantir a aplicação exata.
        </Text>
        <div>
          <Card
            leftTitle="AZUL do contra"
            rightItems={[
              'HEX: #0B6AF4',
              'CMYK: 00, 76, 77, 00',
              'RGB: 255, 087, 051'
            ]}
            colorVariant={1}
          />
          <Card
            leftTitle="Preto potente"
            rightItems={[
              'HEX: #101010',
              'CMYK: 00, 00, 00, 90',
              'RGB: 025, 025, 025'
            ]}
            colorVariant={2}
          />
          <Card
            leftTitle="Branco destaque"
            rightItems={[
              'HEX: #FFFFFF',
              'CMYK: 00, 00, 00, 02',
              'RGB: 249, 249, 249'
            ]}
            colorVariant={3}
          />
        </div>
      </div>
    </>
  )
}

export default CoresSection
