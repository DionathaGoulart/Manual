import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const AboutSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Sobre a vextro©
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          A Vextro© nasce da insatisfação. Somos uma agência de certa forma
          revoltada, projetada para bater de frente com um mercado de marketing
          complacente e focado no próprio lucro.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          Nossa abordagem tem um toque de seguir o caminho inverso. Enquanto
          outros buscam o conforto, nós buscamos a tensão competitiva. Não somos
          apenas mais uma agência; somos a consequência direta de um mercado que
          se esqueceu de seu propósito principal: gerar crescimento para o
          cliente.
        </Text>
      </div>
    </>
  )
}

export default AboutSection
