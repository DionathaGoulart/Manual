import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import Button from '@/ui/Btn'

const DownloadSection: React.FC = () => {
  function handleClick(): void {
    throw new Error('Function not implemented.')
  }

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
          <Button
            text="BAIXAR OS ATIVOS VISUAIS"
            icon="upload"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  )
}

export default DownloadSection
