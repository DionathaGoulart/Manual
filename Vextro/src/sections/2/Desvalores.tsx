import React from 'react'
import Title from '@ui/Tittle'
import Text from '@ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const DesvaloresSection: React.FC = () => {
  return (
    <>
      <Title bold variant="large" align="left" className="text-white font-dlig">
        Des<span className="font-ss02 font-ss01">va</span>lores
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Os desvalores servem como nossas fronteiras estratégicas; a linha
          clara que define o que recusamos a ser. Eles nos lembram diariamente
          que fomos criados para sermos o oposto do padrão, para rejeitar o
          mediano e para nos mantermos perpetuamente "revoltados".
        </Text>

        <TwoColumnText
          leftTitle="chatos"
          leftParagraph="Repudiamos o consenso e o pensamento de rebanho. A conformidade leva a resultados medianos e a uma comunicação indistinguível da concorrência. O caminho seguro é o caminho para a irrelevância."
          rightTitle="egoístas"
          rightParagraph='A satisfação é o fim do crescimento. Declaramos guerra à mentalidade de "dever cumprido". Celebrar o "bom" é se contentar com pouco. Para nós, cada resultado é apenas um novo ponto de partida para a próxima provocação.'
          gap="gap-12"
        />
      </div>
    </>
  )
}

export default DesvaloresSection
