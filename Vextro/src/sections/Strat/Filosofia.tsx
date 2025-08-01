import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const FilosofiaSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Filosofia{' '}
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nossa filosofia é uma frase: "O bom não basta". Esta não é apenas uma
          tagline; é o motor de todas as nossas ações.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          Recusamos a zona de conforto e os resultados medianos porque
          acreditamos que a verdadeira oportunidade de crescimento vive um passo
          além do satisfatório. A conformidade é a maior inimiga do crescimento.
          Nossa missão é questionar, provocar e desafiar para levar clientes a
          um território que ainda não exploraram
        </Text>
      </div>
    </>
  )
}

export default FilosofiaSection
