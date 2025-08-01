import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const ManualSection: React.FC = () => {
  return (
    <>
      {/* Primeira Parte */}
      <Title variant="large" align="left" className="text-white">
        Sobre o Manual
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Bem-vindo à fonte da nossa energia. Este guia não é um manual de
          regras estáticas, mas a própria lógica da nossa mola — o sistema que
          sincroniza nossas vozes para transformar esforço individual em uma
          única força de propulsão.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          Por ser um sistema vivo e não regras fixas, ele serve como nosso ponto
          de partida compartilhado. Use-o para orientar cada criação e manter
          nossas equipes e parceiros em um movimento constante e alinhado,
          garantindo que toda a nossa energia se converta em tração.
        </Text>
      </div>
    </>
  )
}

export default ManualSection
