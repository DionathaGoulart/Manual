import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const GraficSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Caixa Emendada
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          A caixa é mais do que um contorno; é a nossa ferramenta para criar
          foco e clareza.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Use-a para dar estrutura e destaque a elementos importantes — sejam
          textos ou imagens — separando-os do ruído visual e concentrando a
          atenção no que realmente importa.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Assim como nossa mola, a caixa opera sob o princípio de tracking. Para
          simbolizar nosso acompanhamento contínuo e nossa atenção sem falhas,
          suas linhas devem estar sempre conectadas, criando uma estrutura
          fechada e segura.
        </Text>

        <div>
          <ImageGrid
            variant={3}
            bgColors={['#212121', '#212121', '#212121']}
            images={['/caixa1.svg', '/caixa2.svg', '/caixa3.svg']}
          />
          <ImageGrid
            variant={3}
            bgColors={['#FF5733', '#FF5733', '#FF5733']}
            images={['/caixa4.svg', '/caixa5.svg', '/caixa6.svg']}
          />
          <ImageGrid
            variant={3}
            bgColors={['#212121', '#212121', '#212121']}
            images={['/caixa7.svg', '/caixa8.svg', '/caixa9.svg']}
          />
        </div>
      </div>
    </>
  )
}

export default GraficSection
