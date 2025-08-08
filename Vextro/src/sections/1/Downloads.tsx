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
      <Title
        bold
        variant="large"
        align="left"
        className="text-white font-ss02 font-ss01 font-ligatures font-dlig"
      >
        Downloads
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block mb-8">
          Nossos ativos visuais são a expressão gráfica da nossa insatisfação.
          Cada módulo, cada linha e cada uso do itálico invertido são uma
          declaração de desconstrução.
        </Text>
        <Text variant="large" align="left" className="text-white block mb-8">
          AVISO: Não clique no botão abaixo antes de internalizar cada palavra
          deste manual. Usar nossos ativos sem compreender totalmente a Vextro©
          é um erro estratégico. Eles não são elementos decorativos; são as
          ferramentas da nossa revolta.
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
