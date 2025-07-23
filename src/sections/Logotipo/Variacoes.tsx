import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const VariacoesSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Variações{' '}
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Um único formato não serve para todas as situações. Assim como nossa
          metodologia, nossa identidade visual é flexível e se adapta para
          garantir o máximo de clareza e impacto em qualquer aplicação. Por
          isso, nossa assinatura possui três configurações estratégicas:
        </Text>

        <Title variant="small" align="left" className="text-white">
          Assinatura Principal
        </Title>

        <Text variant="medium" align="left" className="text-white block">
          É a nossa formação padrão, a expressão mais completa da nossa marca.
          Use-a sempre que houver espaço para comunicar nossa mensagem com força
          total e com a aplicação de duas cores.
        </Text>

        <ImageGrid variant={3} images={['https://picsum.photos/400']} />

        <Title variant="small" align="left" className="text-white">
          Assinatura Horizontal
        </Title>

        <Text variant="medium" align="left" className="text-white block">
          A configuração ideal para terrenos amplos e com pouco espaço vertical,
          como cabeçalhos e rodapés. Garante que nossa marca mantenha a
          legibilidade e o impacto.
        </Text>

        <ImageGrid variant={3} images={['https://picsum.photos/400']} />

        <Title variant="small" align="left" className="text-white">
          Assinatura Reduzida
        </Title>

        <Text variant="medium" align="left" className="text-white block">
          A nossa essência, projetada para performance máxima nos terrenos mais
          difíceis. Quando o espaço é mínimo, a versão reduzida garante nossa
          presença com clareza e força totais, sem perder identidade.
        </Text>

        <ImageGrid variant={3} images={['https://picsum.photos/400']} />
      </div>
    </>
  )
}

export default VariacoesSection
