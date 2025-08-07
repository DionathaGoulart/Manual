import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'
import ImageGrid from '@/ui/Images'

const LogoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Introdução
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Um logo tradicional vive dentro de uma forma previsível, uma zona de
          conforto. O nosso recusa essa prisão. Ele foi projetado para ser a
          própria quebra do padrão. Se o padrão é completo e contínuo, o nosso é
          modular e fragmentado, um reflexo visual da nossa recusa em aceitar
          sistemas fechados e resultados acabados.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Onde outros usam retas e curvas, nós usamos dobras, rupturas e tensão.
          Cada letra é um módulo que parece ter sido quebrado e remontado,
          representando a nossa insatisfação e inquietação permanentes. A
          inclinação é um itálico invertido, um movimento deliberado contra a
          corrente, um desafio visual que simboliza nossa tendência de ir para o
          caminho inverso.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Em resumo, nosso logo não foi feito para ser agradável. Ele foi feito
          para ser uma declaração. É a nossa insatisfação transformada em um
          símbolo.
        </Text>

        <ImageGrid
          flexibleAspect
          fullImage
          variant={1}
          images={['/introLogo.svg']}
        />
      </div>
    </>
  )
}

export default LogoSection
