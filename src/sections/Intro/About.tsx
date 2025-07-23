import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const AboutSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Sobre a trac©
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          A trac© acredita que o crescimento de um negócio não deveria ser uma
          escolha entre velocidade e atenção. Acreditamos que a verdadeira
          tração nasce de uma parceria dedicada, que mergulha no desafio e se
          compromete com o percurso. É por isso que nosso método é diferente.
        </Text>

        <Text variant="medium" align="left" className="text-white block">
          Atuamos como um sistema de mola inteligente. Primeiro, no modo
          suspensão, acompanhamos de perto, lemos o terreno e nos adaptamos ao
          seu negócio com a atenção que ele merece — este é o nosso tracking.
          Somente com a inteligência e a estabilidade geradas por essa
          suspensão, ativamos o modo propulsão. Usamos essa energia acumulada
          para aplicar a força precisa, no momento certo.
        </Text>

        <Text variant="medium" align="left" className="text-white block">
          O que nós entregamos é o resultado desse ciclo: um marketing de
          performance que gera tração real e coloca negócios em movimento
          constante.
        </Text>
      </div>
    </>
  )
}

export default AboutSection
