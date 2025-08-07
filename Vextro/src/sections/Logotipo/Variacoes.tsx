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

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nossa identidade não se curva ao formato. Ela o domina. Ter mais de
          uma opção de logotipo não é sobre flexibilidade, é sobre estratégia.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          <Text variant="large" align="left" className="text-white block">
            Nossa identidade não se curva ao formato. Ela o domina. Ter mais de
            uma opção de logotipo não é sobre flexibilidade, é sobre estratégia.
          </Text>
        </Text>
        <Title variant="small" align="left" className="text-white">
          Assinatura Principal
        </Title>
        <Text variant="large" align="left" className="text-white block">
          Esta é a nossa declaração completa. O logotipo principal, com sua
          tipografia estilizada, é a materialização explícita da nossa
          filosofia.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Sua orientação predominantemente horizontal garante autoridade e
          presença, sendo a aplicação recomendada para todos os casos onde o
          espaço não é uma restrição, mas uma tela para a nossa mensagem.
        </Text>
        <ImageGrid
          variant={3}
          bgColors={['#0B6AF4', '#101010', '#FFFFFF']}
          images={['/VexBlack.svg', '/VexWhite.svg', '/VexBlue.svg']}
        />
        <Title variant="small" align="left" className="text-white">
          Assinatura Reduzida
        </Title>
        <Text variant="large" align="left" className="text-white block">
          Quando o espaço é limitado, nossa mensagem se concentra, não se reduz.
          O "V", nossa letra inicial, se torna o símbolo da nossa revolta. Ele
          condensa toda a tensão, a quebra e a inclinação invertida do logo
          principal em um único ícone afiado.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          É a nossa ponta de lança, ideal para espaços menores como avatares de
          redes sociais e ícones de aplicativos, onde a declaração precisa ser
          instantânea e inconfundível.
        </Text>
        <ImageGrid
          variant={3}
          bgColors={['#0B6AF4', '#101010', '#FFFFFF']}
          images={['/VBlack.svg', '/VWhite.svg', '/VBlue.svg']}
        />
      </div>
    </>
  )
}

export default VariacoesSection
