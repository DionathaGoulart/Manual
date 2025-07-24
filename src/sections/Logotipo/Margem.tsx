import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const MargemSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Margem de Segurança{' '}
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Para que nossa marca tenha o máximo de impacto, ela precisa de espaço
          para respirar. É ela que protege nossa identidade de qualquer ruído
          visual, garantindo que sua força e clareza se destaquem em qualquer
          terreno.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          ara aplicar essa área de forma consistente, usamos a medida ‘X’ — que
          corresponde a 1/5 da ALTURA do nosso SÍMBOLO — e a medida ‘Y’ — que
          corresponde a 1/5 da LARGURA do nosso SÍMBOLO — conforme mostra o guia
          abaixo.
        </Text>

        <ImageGrid variant={1} images={['/LOGOTIPO.svg']} />
        <ImageGrid tall variant={1} images={['/LOGOTIPO2.svg']} />
        <ImageGrid variant={1} images={['LOGOTIPO3.svg']} />
      </div>
    </>
  )
}

export default MargemSection
