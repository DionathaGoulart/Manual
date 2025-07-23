import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const FilosofiaSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Filosofia{' '}
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Esta não é apenas a nossa frase de efeito; é o nosso ponto de partida
          para tudo. "Sem tracking, não há traction" é a crença que define como
          pensamos, agimos e entregamos resultados. Ela representa uma verdade
          simples: o impulso inteligente só pode nascer do acompanhamento
          dedicado.
        </Text>

        <Text variant="medium" align="left" className="text-white block">
          Pense nesta frase como o nosso principal filtro de qualidade e de
          estratégia. Ela deve guiar cada decisão.
        </Text>
      </div>
    </>
  )
}

export default FilosofiaSection
