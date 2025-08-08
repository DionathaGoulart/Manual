import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const VocabularioSection: React.FC = () => {
  return (
    <>
      <Title bold variant="large" align="left" className="text-white font-ss02">
        Vocabulário
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          As palavras que usamos definem nosso território. As que evitamos
          definem quem combatemos.
        </Text>

        <TwoColumnText
          leftTitle="Use essas"
          leftParagraph="Desconstruir, Inverter, Provocar, Inquietar, Desafiar, Limite,
              Ruptura, Tensão, Direto, Radical, Basta."
          rightTitle="Evite essas"
          rightParagraph="Sinergia, Empoderamento, Inovação (como jargão), Facilitar, Conforto, Zona de conforto, Mediano, Padrão, Satisfeito."
          gap="gap-12"
          titleClassName="text-white font-orbit-gate  uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer font-semibold"
        />
      </div>
    </>
  )
}

export default VocabularioSection
