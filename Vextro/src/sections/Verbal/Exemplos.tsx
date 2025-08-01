import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const ExemplosSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Exemplos
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Veja como nossa voz transforma uma comunicação genérica em algo único
          da trac©.
        </Text>

        <TwoColumnText
          leftTitle="Voz Genérica"
          leftParagraph={
            <>
              1. Soluções Completas de Marketing Digital
              <br />
              <br />
              2. "Nossa agência usa data-driven marketing para otimizar seus
              resultados. Fale com um especialista!"
              <br />
              <br />
              3. "Conforme solicitado, segue nossa proposta de serviços para sua
              avaliação. Nosso objetivo é aumentar seu ROI."
            </>
          }
          rightTitle="Voz da trac©"
          rightParagraph={
            <>
              1. Marketing que se adapta para vender.
              <br />
              <br />
              2. "Likes não pagam as contas. Na trac©, nosso tracking é uma
              obsessão com o que gera impacto real no seu caixa. O resto é
              performance vazia."
              <br />
              <br />
              3. "Este documento detalha nosso plano de ação. Ele mostra como
              nosso acompanhamento dedicado (tracking) será usado para gerar o
              impulso (traction) que irá mover os ponteiros do negócio"
            </>
          }
          gap="gap-12"
          titleClassName="text-white font-orbit-gate uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer font-semibold"
        />
      </div>
    </>
  )
}

export default ExemplosSection
