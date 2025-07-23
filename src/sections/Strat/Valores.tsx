import React from 'react'
import Title from '@ui/Tittle'
import Text from '@ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const ValoresSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Valores{' '}
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Na trac©, um valor não vive sem o outro. Nossa dedicação no Tracking
          é o que dá inteligência à nossa força de Traction. E nosso foco na
          Traction é o que dá propósito ao nosso trabalho de Tracking. É essa
          união que nos define.
        </Text>

        <TwoColumnText
          leftTitle="Tracking"
          leftParagraph="Para nós, é a manifestação da atenção real. É o valor que nos obriga a ouvir mais, a mergulhar fundo e a entender o contexto antes de agir. É a nossa mola no modo suspensão: um compromisso ativo de ler o terreno, absorver os detalhes e nos adaptar constantemente ao percurso de cada parceiro. Valorizar o tracking significa que nunca oferecemos uma solução pronta; nós construímos o caminho junto com quem confia em nosso trabalho."
          rightTitle="Traction"
          rightParagraph="É o nosso valor inegociável do resultado. É a crença de que análise sem ação é energia desperdiçada. É a nossa mola no modo propulsão: a obsessão por transformar cada aprendizado em um impulso concreto e inteligente. Valorizar a traction significa que nosso trabalho só termina quando gera movimento real para o negócio do nosso cliente. Não nos contentamos com relatórios; buscamos o impacto."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>
    </>
  )
}

export default ValoresSection
