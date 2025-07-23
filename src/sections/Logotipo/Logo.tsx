import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const LogoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Logo
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Nosso símbolo não é um enfeite. É a representação visual da nossa
          crença fundamental: "Sem tracking, não há traction". Cada elemento foi
          projetado para contar a história de como geramos resultados, unindo os
          dois lados da nossa mola de dupla função.
        </Text>

        <div className="flex gap-7 py-8">
          {' '}
          <div className="bg-[#212121] p-16 rounded-3xl h-64 w-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/400"
              alt="Descrição da imagem"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="bg-[#212121] p-16 rounded-3xl h-64 w-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/400"
              alt="Descrição da imagem"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <TwoColumnText
          leftTitle="Os 5 A's"
          leftParagraph="Os cinco pontos que formam o pentágono representam os 5 A's do Marketing (Aware, Appeal, Ask, Act, Advocate). Para nós, eles não são apenas estágios; eles são o terreno da jornada do cliente. É esse o percurso que acompanhamos (tracking) com atenção, adaptando-se a cada ponto de contato para acumular a inteligência necessária para os resultados (traction)."
          rightTitle="A Mola"
          rightParagraph="A mola é o coração da nossa operação, o motor que converte análise em ação. No modo suspensão (tracking), absorve os dados do terreno, e no modo propulsão (traction), libera essa energia acumulada com uma força precisa e inteligente. É a nossa garantia de que a atenção sempre se converte em movimento."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>
    </>
  )
}

export default LogoSection
