import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const DownloadSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Downloads{' '}
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block mb-8">
          Baixe o kit completo de ativos visuais da trac© no botão abaixo.
          Lembre-se: para que a propulsão seja precisa, o alinhamento vem
          primeiro. Uma rápida consulta ao nosso guia garante o impulso.
        </Text>

        <div className="flex justify-start">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transform hover:scale-105 transition-all duration-200 ease-in-out">
            BAIXAR OS ATIVOS VISUAIS
          </button>
        </div>
      </div>
    </>
  )
}

export default DownloadSection
