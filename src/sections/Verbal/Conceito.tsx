import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const ConceitoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Conceito
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Nossa filosofia "Sem tracking, não há traction" ganha vida em um único
          e poderoso conceito: a mola inteligente de dupla função.
        </Text>

        <Text variant="medium" align="left" className="text-white block">
          Pense nesta frase como o nosso principal filtro de qualidade e de
          estratégia. Ela deve guiar cada decisão.
        </Text>

        <TwoColumnText
          mainTitle="Mola como Suspensão (Tracking)"
          leftParagraph='É a nossa capacidade de ler o terreno em tempo real. É o nosso compromisso com a atenção dedicada, absorvendo dados e impactos para manter o percurso do cliente estável e sob controle. É o nosso "como".'
          rightParagraph="Como soa na linguagem: Adaptação, resposta, absorção, contato, leitura de terreno, ajuste, estabilidade, resiliência, acompanhamento dedicado."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />

        <TwoColumnText
          mainTitle="Mola como Propulsão (Traction)"
          leftParagraph='É a consequência inteligente do Modo 1. Usamos a energia e o conhecimento acumulados para aplicar uma força precisa e direcionada, que gera movimento real e impacto no negócio. É o nosso "o quê".'
          rightParagraph="Como soa na linguagem: Impulso, propulsão, energia, força aplicada, movimento, avanço, aceleração, resultado concreto, impacto no caixa."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>
    </>
  )
}

export default ConceitoSection
