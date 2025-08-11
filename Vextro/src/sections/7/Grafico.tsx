import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const GraficoSection: React.FC = () => {
  return (
    <>
      <Title
        bold
        variant="large"
        align="left"
        className="text-white font-ss01 font-ligatures font-ss02"
      >
        APOIO GRÁFICO
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nossos apoios gráficos não são elementos aleatórios, mas sim, o
          próprio logotipo desconstruído, criados para levar nossa mensagem de
          ruptura a todo o layout.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Seguindo uma lógica de reconstrução, cada traço e módulo das letras
          pode ser extraído e reagrupado para criar novas composições, seja para
          criar molduras, guiar o olhar ou construir uma hierarquia visual que
          desafia o padrão.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          O objetivo é que cada peça seja uma extensão natural da nossa
          identidade, comandando o espaço com a mesma energia de quebra e tensão
          do logotipo.
        </Text>
      </div>
      <div className="mt-6">
        <ImageGrid
          variant={4}
          images={['/1.1.svg', '/1.2.svg', '/1.3.svg', '/1.4.svg', '/1.5.svg']}
        />
        <ImageGrid
          variant={4}
          images={['/2.1.svg', '/2.2.svg', '/2.3.svg', '/2.4.svg', '/2.5.svg']}
        />
        <ImageGrid
          variant={4}
          images={['/3.1.svg', '/3.2.svg', '/3.3.svg', '/3.4.svg', '/3.5.svg']}
        />
        <ImageGrid
          variant={4}
          images={['4.1.svg', '4.2.svg', '4.3.svg', '4.4.svg', '4.5.svg']}
        />
      </div>
      <div className="mt-6">
        <ImageGrid
          colorVariant={2}
          variant={4}
          images={['/5.1.svg', '/5.2.svg', '/5.3.svg', '/5.4.svg', '/5.5.svg']}
        />
        <ImageGrid
          colorVariant={2}
          variant={4}
          images={['/6.1.svg', '/6.2.svg', '/6.3.svg', '/6.4.svg', '/6.5.svg']}
        />
        <ImageGrid
          colorVariant={2}
          variant={4}
          images={['/7.1.svg', '/7.2.svg', '/7.3.svg', '/7.4.svg', '/7.5.svg']}
        />
        <ImageGrid
          colorVariant={2}
          variant={4}
          images={['8.1.svg', '8.2.svg', '8.3.svg', '8.4.svg', '8.5.svg']}
        />
      </div>
      <div className="mt-6">
        <ImageGrid
          colorVariant={3}
          variant={4}
          images={['/11.svg', '/12.svg', '/13.svg', '/14.svg', '/15.svg']}
        />
        <ImageGrid
          colorVariant={3}
          variant={4}
          images={['/21.svg', '/22.svg', '/23.svg', '/24.svg', '/25.svg']}
        />
        <ImageGrid
          colorVariant={3}
          variant={4}
          images={['/31.svg', '/32.svg', '/33.svg', '/34.svg', '/35.svg']}
        />
        <ImageGrid
          colorVariant={3}
          variant={4}
          images={['41.svg', '42.svg', '43.svg', '44.svg', '45.svg']}
        />
      </div>
    </>
  )
}

export default GraficoSection
