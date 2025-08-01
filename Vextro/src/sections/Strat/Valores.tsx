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

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Valores não são palavras para decorar um quadro na parede. São os
          nossos códigos de conduta inegociáveis. Servem como um filtro para
          cada decisão, garantindo que nunca nos desviemos para a zona de
          conforto que juramos destruir.
        </Text>

        <TwoColumnText
          leftTitle="insatisfeitoS"
          leftParagraph="Não aceitamos o padrão. Nossa insatisfação é o ponto de partida para o crescimento dos nossos clientes. É uma força que nos impulsiona a questionar tudo e a procurar as alavancas de crescimento que os outros não conseguem ver."
          rightTitle="inquietoS"
          rightParagraph="Estamos em movimento constante, sempre em busca do próximo nível. Essa inquietação reflete a natureza de desconstrução da nossa própria identidade e a recusa em aceitar que uma fórmula de sucesso durará para sempre."
          gap="gap-12"
          titleClassName="text-white font-orbit-gate uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer font-semibold"
        />
      </div>
    </>
  )
}

export default ValoresSection
