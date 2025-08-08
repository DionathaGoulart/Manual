import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import Button from '@/ui/Btn'

const PromptSection: React.FC = () => {
  function handleClick(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <Title
        bold
        variant="large"
        align="left"
        className="text-white font-ss02 font-ss01 font-ligatures font-ss02"
      >
        PROMPT
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block mb-8">
          A IA é uma arma poderosa para criar imagens que sigam nossa direção
          criativa.
        </Text>
        <Text variant="large" align="left" className="text-white block mb-8">
          Nossa ferramenta de escolha, onde nosso estilo foi testado e refinado
          para máxima eficácia, é o Recraft. Lá, definimos um estilo que já
          encapsula nossa estética: ambientes escuros, iluminação azul
          estratégica e, o mais importante, o desfoque de movimento. Para acesso
          direto, utilize o botão abaixo.
        </Text>
        <Text variant="large" align="left" className="text-white block mb-8">
          Para outras ferramentas, como o Midjourney, disponibilizamos um pacote
          de imagens de referência para guiar a IA, mostrando o resultado que
          exigimos.
        </Text>
        <div className="flex justify-start gap-2 text-nowrap">
          <Button
            size="small"
            text="ACESSAR ESTILO NO RECRAFT"
            icon="upload"
            onClick={handleClick}
          />
          <Button
            size="small"
            text="BAIXAR IMAGENS DE REFERÊNCIA"
            icon="upload"
            onClick={handleClick}
          />
        </div>
        <Text variant="large" align="left" className="text-white block mb-8">
          É super importante entender que qualquer imagem gerada por IA é, por
          natureza, um rascunho. Para atingir nosso padrão de excelência, o
          upscale e a correção de artefatos são obrigatórios. Ferramentas como a
          Magnific.ai são recomendadas para refinar a imagem, garantindo nitidez
          profissional e eliminando as imperfeições que denunciam uma origem
          puramente maquinal. O resultado final deve ser impecável, não apenas
          um prompt bem-sucedido.
        </Text>
      </div>
    </>
  )
}

export default PromptSection
