import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const ContextoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Contexto
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Toda tração nasce de um ponto de ignição. Um momento em que a energia
          acumulada é liberada com força e propósito. A nossa cor principal foi
          escolhida para capturar exatamente esse instante.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Não é um laranja qualquer. É o tom de uma mola estressada pelo
          trabalho intenso do tracking; o calor gerado pela nossa atenção
          dedicada, no exato momento em que o potencial acumulado se converte em
          propulsão pura.
        </Text>
        <ImageGrid fullImage tall variant={1} images={['/imagemcores.png']} />
      </div>
    </>
  )
}

export default ContextoSection
