import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const DownloadSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Downloads{' '}
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block mb-8">
          Baixe o kit completo de ativos visuais da trac© no botão abaixo.
          Lembre-se: para que a propulsão seja precisa, o alinhamento vem
          primeiro. Uma rápida consulta ao nosso guia garante o impulso.
        </Text>
        <div className="flex justify-start">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-[#FF5733] text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform hover:scale-105 transition-all duration-200 ease-in-out gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3V16M12 16L16 12M12 16L8 12M4 21H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            BAIXAR OS ATIVOS VISUAIS
          </button>
        </div>
      </div>
    </>
  )
}

export default DownloadSection
