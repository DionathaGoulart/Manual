import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const AplicacaoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Aplicação
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Para garantir que a Avantique seja usada com precisão, seguimos dois
          protocolos claros:
        </Text>
      </div>
      <Title variant="small" align="left" className="text-white mt-6">
        Títulos
      </Title>
      <div className="space-y-2">
        <Text variant="large" align="left" className="text-white block">
          O objetivo é o máximo impacto e a expressão da nossa ruptura. Use
          APENAS LETRAS MAIÚSCULAS. A combinação com os style sets (caracteres
          inclinados) é obrigatória para criar a tensão que nos define.
        </Text>
      </div>
      <Title variant="small" align="left" className="text-white mt-6">
        Textos
      </Title>
      <div className="space-y-2">
        <Text variant="large" align="left" className="text-white block">
          O objetivo é a clareza e a legibilidade, sem perder nosso caráter. Use
          a fonte em sua forma regular, com letras maiúsculas e minúsculas
          conforme a necessidade. Neste caso, os style sets NÃO DEVEM SER
          UTILIZADOS. A mensagem aqui é direta; a ruptura é reservada para os
          momentos de maior destaque.
        </Text>
      </div>
    </>
  )
}

export default AplicacaoSection
