import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import Button from '@/ui/Btn'

const ConceitoSection: React.FC = () => {
  function handleClick(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <Title bold variant="large" align="left" className="text-white font-ss02">
        Personalidade
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block mb-8">
          O guia abaixo é o prompt definitivo para instalar nossa identidade
          verbal em qualquer IA. Não o use para pedir ajuda, use-o para dar uma
          ordem.
        </Text>
        <Text variant="large" align="left" className="text-white block mb-8">
          <span className="font-medium">Lembre-se:</span> a máquina é uma
          ferramenta, não um estrategista. Ela é limitada, programada para a
          média e vai cometer erros. O uso deste prompt não retira a necessidade
          de um copywriter para avaliar, refinar e garantir o impacto final. A
          supervisão humana não é uma opção, é um comando.
        </Text>
        <Text variant="large" align="left" className="text-white block mb-8">
          Use a IA para acelerar, mas use a inteligência humana para vencer.
        </Text>
        <div className="flex justify-start">
          <Button
            text="BAIXAR O GUIA DE IDENTIDADE VERBAL"
            icon="upload"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  )
}

export default ConceitoSection
