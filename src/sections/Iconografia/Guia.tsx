import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

import ImageGrid from '@/ui/Images'

const GuiaSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Guia
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nossos ícones não são enfeites. São ferramentas de propulsão. Cada um
          é construído para dar forma à nossa metodologia e fixar o pentágono
          como um ponto de contato imediato da nossa identidade.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Consistência é o que gera força. Por isso, nosso sistema de ícones é
          intencional e proprietário. A base de tudo o que comunicamos
          visualmente é, e sempre será, o pentágono.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Isso não é sobre limitar a criatividade. É sobre aplicar disciplina
          para gerar impacto. Dentro desta estrutura, mesclamos, subtraímos e
          adicionamos formas para construir significado. A única condição
          inegociável é que o pentágono permaneça como a estrutura visível, a
          fundação que garante reconhecimento instantâneo.
        </Text>
        <ImageGrid variant={1} images={['/pentagono.png']} />
        <Title variant="small" align="left" className="text-white">
          Keyline
        </Title>
        <Text variant="large" align="left" className="text-white block">
          O pentágono é uma forma irregular. E é por isso ele não se encaixará
          perfeitamente a um grid engessado. Nossas keylines não são uma grade
          para prender o design; são o nosso sistema de suspensão, a ferramenta
          que usamos para absorver a irregularidade e equilibrar o peso visual
          de cada ícone.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          O pentágono é uma forma irregular. E é por isso ele não se encaixará
          perfeitamente a um grid engessado. Nossas keylines não são uma grade
          para prender o design; são o nosso sistema de suspensão, a ferramenta
          que usamos para absorver a irregularidade e equilibrar o peso visual
          de cada ícone.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Para garantir o ponto de partida correto, o template com as keylines
          está pronto para ser usado.
        </Text>
        <ImageGrid variant={1} images={['/guia.svg']} />
        <Title variant="small" align="left" className="text-white">
          Traçado
        </Title>
        <Text variant="large" align="left" className="text-white block">
          A espessura padrão é de 1,5px, sempre aplicada de forma interna dentro
          da keyline de 24x24px. Sem exceções.
        </Text>
        <Title variant="small" align="left" className="text-white">
          Arredondamento
        </Title>
        <Text variant="large" align="left" className="text-white block">
          Resiliência se constrói com consistência. O arredondamento dos cantos
          segue a mesma lógica que aplicamos em todo o nosso sistema visual, dos
          gráficos aos ícones.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          A fórmula é o nosso código para garantir estabilidade: Altura / 40 =
          Arredondamento.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Para a keyline de 24x24px, o valor é 0.6.
        </Text>
      </div>
    </>
  )
}

export default GuiaSection
