import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const TipoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Tipo{' '}
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          A tipografia do nosso símbolo nasceu da estrutura da fonte Cascadia,
          mas foi totalmente redesenhada por nós. Cada letra passou pelo nosso
          processo de "suspensão e propulsão": suavizamos suas formas e
          ajustamos suas conexões, criando uma fluidez que reflete nossa
          capacidade de adaptação (tracking). Ao mesmo tempo, aplicamos
          curvaturas com precisão cirúrgica, dando a cada letra a força e o
          impulso do nosso símbolo (traction).
        </Text>

        <Text variant="medium" align="left" className="text-white block">
          O resultado é uma assinatura visual proprietária. As letras da marca
          trac© não foram apenas desenhadas, foram projetadas para carregar
          nossa filosofia em sua própria forma, unindo a fluidez da adaptação
          com a precisão da força.
        </Text>

        <ImageGrid variant={1} images={['https://picsum.photos/400']} />
      </div>
    </>
  )
}

export default TipoSection
