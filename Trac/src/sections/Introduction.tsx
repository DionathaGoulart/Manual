import React from 'react'
import Title from '../ui/Tittle'
import Text from '../ui/Text'

const IntroSection: React.FC = () => {
  return (
    <>
      {/* Primeira Parte */}
      <div className="space-y-6 mb-10">
        <Title variant="large" align="left" className="text-white">
          Sobre o Manual
        </Title>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Bem-vindo à fonte da nossa energia. Este guia não é um manual de
            regras estáticas, mas a própria lógica da nossa mola — o sistema que
            sincroniza nossas vozes para transformar esforço individual em uma
            única força de propulsão.
          </Text>

          <Text variant="medium" align="left" className="text-white block">
            Por ser um sistema vivo e não regras fixas, ele serve como nosso
            ponto de partida compartilhado. Use-o para orientar cada criação e
            manter nossas equipes e parceiros em um movimento constante e
            alinhado, garantindo que toda a nossa energia se converta em tração.
          </Text>
        </div>
      </div>

      {/* Segunda Parte */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Sobre a trac©
        </Title>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            A trac© acredita que o crescimento de um negócio não deveria ser
            uma escolha entre velocidade e atenção. Acreditamos que a verdadeira
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
      </div>

      {/* Terceira Parte */}
      <div className="space-y-8">
        <Title variant="large" align="left" className="text-white">
          Downloads{' '}
        </Title>

        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block mb-8">
            Baixe o kit completo de ativos visuais da trac© no botão abaixo.
            Lembre-se: para que a propulsão seja precisa, o alinhamento vem
            primeiro. Uma rápida consulta ao nosso guia garante o impulso.
          </Text>

          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transform hover:scale-105 transition-all duration-200 ease-in-out">
              Clique Aqui
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroSection
