import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'
import ImageGrid from '@/ui/Images'

const LogoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Logo
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nosso símbolo não é um enfeite. É a representação visual da nossa
          crença fundamental: "Sem tracking, não há traction". Cada elemento foi
          projetado para contar a história de como geramos resultados, unindo os
          dois lados da nossa mola de dupla função.
        </Text>

        <ImageGrid variant={2} images={['/pentagono.png', '/mola.svg']} />

        <TwoColumnText
          leftTitle="Os 5 A's"
          leftParagraph="Os cinco pontos que formam o pentágono representam os 5 A's do Marketing (Aware, Appeal, Ask, Act, Advocate). Para nós, eles não são apenas estágios; eles são o terreno da jornada do cliente. É esse o percurso que acompanhamos (tracking) com atenção, adaptando-se a cada ponto de contato para acumular a inteligência necessária para os resultados (traction)."
          rightTitle="A Mola"
          rightParagraph="A mola é o coração da nossa operação, o motor que converte análise em ação. No modo suspensão (tracking), absorve os dados do terreno, e no modo propulsão (traction), libera essa energia acumulada com uma força precisa e inteligente. É a nossa garantia de que a atenção sempre se converte em movimento."
          gap="gap-12"
          titleClassName="text-white font-orbit-gate uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer font-semibold "
        />

        <ImageGrid variant={1} images={['/Vector.svg']} />
      </div>
    </>
  )
}

export default LogoSection
