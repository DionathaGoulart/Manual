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
          A margem de segurança do nosso logo, ou área de respiro, é uma zona de
          controle estratégico. Sua função é proteger a identidade Vextro do
          ruído visual, garantindo que nossa mensagem de ruptura seja entregue
          com máximo impacto.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          Para uma aplicação consistente, a regra é usar a medida “X” — que
          corresponde à largura da letra “O” do logotipo — como o espaçamento
          mínimo obrigatório em todos os lados. Sem exceçõe
        </Text>
        <div>
          <ImageGrid
            flexibleAspect
            fullImage
            variant={1}
            images={['/mVex.svg']}
          />
          <ImageGrid
            flexibleAspect
            fullImage
            tall
            variant={1}
            images={['/MV.svg']}
          />
          <ImageGrid variant={1} images={['LOGOTIPO3.svg']} />
        </div>
      </div>
    </>
  )
}

export default MargemSection
