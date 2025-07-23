import React from 'react'
import Title from '../ui/Tittle'
import Text from '../ui/Text'

const IntroSection: React.FC = () => {
  return (
    <>
      {/* Primeira Parte */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Título da Primeira Parte
        </Title>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Este é o primeiro parágrafo da primeira parte. Ele contém
            informações importantes que estabelecem o contexto para o que vem a
            seguir.
          </Text>

          <Text variant="medium" align="left" className="text-white block">
            Este é o segundo parágrafo, complementando o anterior com detalhes
            adicionais e expandindo o conceito apresentado.
          </Text>
        </div>
      </div>

      {/* Segunda Parte */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Título da Segunda Parte
        </Title>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Aqui começa o primeiro parágrafo da segunda parte, com mais detalhes
            e informações relevantes para o usuário.
          </Text>

          <Text variant="medium" align="left" className="text-white block">
            O segundo parágrafo continua a discussão, fornecendo insights
            adicionais e aprofundando o tema abordado.
          </Text>

          <Text variant="medium" align="left" className="text-white block">
            E este é o terceiro parágrafo, finalizando a segunda parte com uma
            conclusão clara e objetiva.
          </Text>
        </div>
      </div>

      {/* Terceira Parte */}
      <div className="space-y-8">
        <Title variant="large" align="left" className="text-white">
          Título da Terceira Parte
        </Title>

        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block mb-8">
            Este é o parágrafo da terceira parte, levando a uma chamada para
            ação que convida o usuário a interagir.
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
