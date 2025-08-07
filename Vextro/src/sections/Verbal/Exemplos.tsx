import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const ExemplosSection: React.FC = () => {
  return (
    <>
      <Title bold variant="large" align="left" className="text-white font-ss02">
        Exem<span className="font-dlig">plos</span>
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          É na prática que a nossa voz se torna uma força.
        </Text>

        <TwoColumnText
          leftTitle="Voz Genérica"
          leftParagraph={
            <>
              1. Nosso serviço de SEO é uma solução completa para otimizar seu
              site, melhorar o ranking e aumentar o tráfego orgânico através de
              estratégias comprovadas.
              <br />
              <br />
              2. Convite: Reunião de Acompanhamento Semanal
              <br />
              <br />
              3. Estamos felizes em anunciar que superamos nossas metas neste
              trimestre!
            </>
          }
          rightTitle="Voz da trac©"
          rightParagraph={
            <>
              1. SEO não é sobre ranquear, é dominar. Nós invertemos a lógica do
              seu concorrente, encontramos as rupturas no algoritmo e exploramos
              o território que eles têm medo de pisar.
              <br />
              <br />
              2. Acompanhar é pouco. Vamos definir o próximo alvo.
              <br />
              <br />
              3. Metas superadas. Um bom resultado. Agora, vamos entender como
              melhorar ainda mais.
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
