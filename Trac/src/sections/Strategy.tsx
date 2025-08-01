import React from 'react'
import Title from '../ui/Tittle'
import Text from '../ui/Text'
import TwoColumnText from '../ui/TwoColumnText'

const StratSection: React.FC = () => {
  return (
    <>
      {/* Primeira Parte - Title + Paragraph */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Título da Primeira Parte
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Este é o primeiro parágrafo da primeira parte. Ele contém
            informações importantes que estabelecem o contexto para o que vem a
            seguir.
          </Text>
        </div>
      </div>

      {/* Segunda Parte - Outro Paragraph */}
      <div className="space-y-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Este é o segundo parágrafo, complementando o anterior com detalhes
            adicionais e expandindo o conceito apresentado.
          </Text>
        </div>
      </div>

      {/* Terceira Parte - Title + Paragraph */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Título da Segunda Parte
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Aqui começa o primeiro parágrafo da segunda parte, com mais detalhes
            e informações relevantes para o usuário.
          </Text>
        </div>
      </div>

      {/* Quarta Parte - Title + Paragraph */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Título da Terceira Parte
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            O segundo parágrafo continua a discussão, fornecendo insights
            adicionais e aprofundando o tema abordado.
          </Text>
        </div>
      </div>

      {/* Quinta Parte - Duas Colunas com Title H3 + Paragraph cada */}
      <div className="mb-16">
        <TwoColumnText
          leftTitle="Título H3 Esquerda"
          leftParagraph="Este é o parágrafo da coluna esquerda. Contém informações específicas sobre um aspecto importante do tema abordado."
          rightTitle="Título H3 Direita"
          rightParagraph="Este é o parágrafo da coluna direita. Complementa as informações da esquerda com detalhes adicionais relevantes."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>

      {/* Sexta Parte - Title + Paragraph */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Título da Quarta Parte
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            E este é mais um parágrafo, fornecendo informações adicionais e
            aprofundando ainda mais o tema central da seção.
          </Text>
        </div>
      </div>

      {/* Sétima Parte - Novamente Duas Colunas com Title H3 + Paragraph cada */}
      <div className="mb-16">
        <TwoColumnText
          leftTitle="Outro Título H3 Esquerda"
          leftParagraph="Mais um parágrafo na coluna esquerda, desta vez com informações complementares que enriquecem o conteúdo apresentado."
          rightTitle="Outro Título H3 Direita"
          rightParagraph="E finalmente o parágrafo da coluna direita, concluindo esta seção com uma síntese clara e objetiva dos pontos abordados."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>
    </>
  )
}

export default StratSection
