import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'
import Button from '@/ui/Btn'

const InstitucionalSection: React.FC = () => {
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
        <span className="font-ss02">Tipografia</span> institucio
        <span className="font-ss02">nal</span>
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nossa escolha pela Avantique não foi estética, foi estratégica. Ela
          representa perfeitamente a filosofia da Vextro: um sistema que abraça
          a tensão entre o padrão e a ruptura.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          A base da Avantique é geométrica e direta, o que nos dá autoridade. No
          entanto, é em seus caracteres alternativos (os style sets) que
          encontramos nossa voz de ruptura. A estabilidade de uma letra "normal"
          seguida pela quebra de uma letra inclinada cria a tensão visual que
          define a Vextro. É a nossa insatisfação construtiva traduzida em
          texto. Letras como o "V", com seu itálico invertido, não são um acaso;
          elas criam um universo visual coeso que dialoga diretamente com a
          quebra do nosso logotipo.
        </Text>
        <div className="flex justify-start">
          <Button text="BAIXAR AVANTIQUE" icon="upload" onClick={handleClick} />
        </div>

        <ImageGrid
          flexibleAspect
          fullImage
          tall
          variant={1}
          images={['/inst.svg']}
        />
      </div>
    </>
  )
}

export default InstitucionalSection
