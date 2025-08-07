import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import Card from '@/ui/Card'

const CoresSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
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
      <Title variant="large" align="left" className="text-white mt-32">
        Cores <br /> Secundárias
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          As cores principais devem sempre ser as primeiras a serem vistas. As
          cores de apoio são secundárias e devem parecer assim.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          Pense nisto como volume: as cores principais falam em voz alta; as
          secundárias falam baixo, e apenas quando necessário para auxiliar, mas
          nunca devem ser o centro das atenções.
        </Text>

        <Card
          leftTitle="Verde"
          leftSubtitle="Aprovado"
          rightItems={[
            'HEX: #33FF70 ',
            'CMYK: 80, 00, 56, 00',
            'RGB: 051, 255, 112'
          ]}
          colorVariant={4}
        />
        <Card
          leftTitle="Amarelo"
          leftSubtitle="Alerta"
          rightItems={[
            'HEX: #FFD433',
            'CMYK: 00, 17, 80, 00',
            'RGB: 255, 212, 051'
          ]}
          colorVariant={5}
        />
        <Card
          leftTitle="Sombra"
          rightItems={[
            'HEX: #212121',
            'CMYK: 00, 00, 00, 87',
            'RGB: 033, 033, 033'
          ]}
          colorVariant={2}
        />
      </div>
    </>
  )
}

export default CoresSection
