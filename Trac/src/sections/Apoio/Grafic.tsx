import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const GraficSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Gráficos <br /> Emendados
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Priorizamos o uso de gráficos de coluna e barra por um motivo
          estratégico: eles são a melhor tela para aplicar nosso princípio de
          tracking, inspirado na mola.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Ao conectar as barras ou colunas, transformamos um gráfico padrão em
          uma narrativa visual da trac©. Cada conexão simboliza nosso
          acompanhamento contínuo e a forma como um resultado leva ao próximo,
          reforçando nossa metodologia com clareza e impacto.
        </Text>
        <div>
          <ImageGrid
            variant={2}
            bgColors={['#212121', '#212121']}
            images={['/g1.svg', '/g2.svg']}
          />
        </div>
        <Text variant="large" align="left" className="text-white block">
          Ao utilizar os gráficos, as bordas devem ser arredondadas. Contudo,
          para não comprometer a espessura das linhas de conexão, esse ajuste
          deve ser feito na última etapa.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          O valor do arredondamento deve ser a altura do elemento dividido por
          40 (Altura / 40 = Arredondamento).
        </Text>
      </div>
    </>
  )
}

export default GraficSection
