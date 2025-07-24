import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import Card from '@/ui/Card'

const SecundariasSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
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

export default SecundariasSection
