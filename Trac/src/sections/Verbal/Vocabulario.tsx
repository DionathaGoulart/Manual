import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const VocabularioSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Vocabulário
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Para soar como trac©, use as palavras que refletem nossa metodologia
          e evite as que representam nosso inimigo.
        </Text>

        <TwoColumnText
          leftTitle="Use essas"
          leftParagraph={
            <>
              Palavras de Suspensão (Tracking): Adaptação, Resposta, Absorção,
              Contato, Leitura de terreno, Ajuste, Estabilidade, Resiliência,
              Acompanhamento, Atenção, Dedicação.
              <br />
              <br />
              Palavras de Propulsão (Traction): Impulso, Propulsão, Energia,
              Força (aplicada/precisa), Movimento, Avanço, Impacto no caixa,
              Vendas, Tração.
              <br />
              <br />
              Palavras de Parceria: Nós, Juntos, Lado a lado, Parceria,
              Sincronia, Construção, Colaboração.
            </>
          }
          rightTitle="Evite essas"
          rightParagraph="Palavras Estáticas e/ou Agressivas: Mapa, Regra, Receita de bolo, Agressivo, Você não sabe, Você precisa, Crescimento a qualquer custo, Depressa, Para ontem, Ficando para trás, Máquina de vendas."
          gap="gap-12"
          titleClassName="text-white font-orbit-gate  uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer font-semibold"
        />
      </div>
    </>
  )
}

export default VocabularioSection
