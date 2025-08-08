import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'
import ImageGrid from '@/ui/Images'

const MolaSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Mola
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          O próprio símbolo da trac© pode ser utilizado como um contorno para
          emoldurar seções ou como uma textura de fundo para delimitar ou
          preencher espaços vazios.
        </Text>
        <ImageGrid
          variant={3}
          bgColors={['#212121', '#FF5733', '#212121']}
          images={['/mola1.svg', '/mola2.svg', '/mola3.svg']}
        />
      </div>
      <Title variant="large" align="left" className="text-white mt-32">
        Mola Emendada
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Use nossa mola como um elemento dinâmico em suas composições para
          simbolizar nosso processo de acompanhamento (tracking) e propulsão
          (traction).
        </Text>
        <Text variant="large" align="left" className="text-white block">
          A regra de ouro é a conexão: para que represente nossa atenção
          contínua, as pontas da mola nunca devem estar soltas, sempre ligadas a
          algo na composição.
        </Text>
        <div>
          <ImageGrid
            variant={3}
            bgColors={['#212121', '#212121', '#212121']}
            images={['/memendada1.svg', '/memendada2.svg', '/memendada3.svg']}
          />
          <ImageGrid
            variant={3}
            bgColors={['#FF5733', '#FF5733', '#FF5733']}
            images={['/memendada4.svg', '/memendada5.svg', '/memendada6.svg']}
          />
          <ImageGrid
            variant={3}
            bgColors={['#212121', '#212121', '#212121']}
            images={['/memendada7.svg', '/memendada8.svg', '/memendada9.svg']}
          />
        </div>
      </div>
    </>
  )
}

export default MolaSection
