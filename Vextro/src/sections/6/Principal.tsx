import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const PrincipalSection: React.FC = () => {
  return (
    <>
      <Title
        bold
        variant="large"
        align="left"
        className="text-white font-ss02 font-ss01 font-ligatures font-ss02"
      >
        Introdução
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          A tipografia não é a roupa da marca; é a sua voz tornada legível. É a
          forma como soamos em um título, em um parágrafo, em uma única palavra.
          Cada fonte carrega uma personalidade, uma intenção e um tom.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          Manter a consistência tipográfica, portanto, não é uma questão de
          organização. É uma demonstração de força e convicção. Uma marca que
          vacila em sua tipografia é uma marca que não acredita na própria
          mensagem. Nós não vacilamos. Nossa voz é consistente, direta e
          inconfundível.
        </Text>
      </div>
    </>
  )
}

export default PrincipalSection
