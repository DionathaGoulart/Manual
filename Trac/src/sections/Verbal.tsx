import React from 'react'
import Title from '../ui/Tittle'
import Text from '../ui/Text'
import TwoColumnText from '../ui/TwoColumnText'

const ComplexSection: React.FC = () => {
  return (
    <>
      {/* H2 + Paragraph + Another Paragraph */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Título Principal da Seção
        </Title>
        <div className="space-y-4 max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Este é o primeiro parágrafo que segue o título principal. Ele
            estabelece o contexto e introduz os conceitos fundamentais que serão
            abordados ao longo desta seção.
          </Text>
          <Text variant="medium" align="left" className="text-white block">
            O segundo parágrafo complementa as informações iniciais, fornecendo
            detalhes adicionais e preparando o terreno para os tópicos mais
            específicos que virão a seguir.
          </Text>
        </div>
      </div>

      {/* H3 e H3 lado a lado (usando componente de 2 colunas) */}
      <div className="mb-16">
        <TwoColumnText
          leftTitle="Primeiro Subtítulo"
          leftParagraph="Conteúdo detalhado do primeiro subtítulo, explicando conceitos importantes e fornecendo informações relevantes para o entendimento do tema."
          rightTitle="Segundo Subtítulo"
          rightParagraph="Informações complementares do segundo subtítulo, que trabalham em conjunto com o primeiro para criar uma visão abrangente do assunto."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>

      {/* 2 Colunas com 4 parágrafos cada (primeira linha em semibold) */}
      <div className="mb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna Esquerda */}
          <div className="space-y-6">
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Primeiro Tópico Importante:</span>{' '}
                Detalhamento completo sobre este primeiro aspecto fundamental,
                incluindo suas implicações e aplicações práticas no contexto
                geral.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Segundo Aspecto Relevante:</span>{' '}
                Explicação aprofundada sobre este segundo ponto crucial,
                demonstrando sua importância e conexão com os demais elementos.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Terceiro Elemento Chave:</span>{' '}
                Análise detalhada deste terceiro componente essencial,
                destacando suas características únicas e contribuições
                específicas.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Quarto Fator Decisivo:</span>{' '}
                Considerações finais sobre este quarto elemento fundamental,
                sintetizando sua relevância no conjunto geral dos conceitos
                apresentados.
              </Text>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="space-y-6">
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Metodologia Aplicada:</span>{' '}
                Descrição das abordagens metodológicas utilizadas, explicando os
                processos e técnicas empregadas para alcançar os resultados
                desejados.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Resultados Obtidos:</span>{' '}
                Apresentação dos principais resultados conquistados através da
                aplicação das metodologias descritas, com foco nos benefícios
                práticos.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Impactos Observados:</span> Análise
                dos impactos e transformações observadas a partir da
                implementação das estratégias e metodologias apresentadas.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                <span className="font-bold">Perspectivas Futuras:</span> Visão
                sobre as tendências e desenvolvimentos futuros esperados,
                baseados nos fundamentos e resultados já estabelecidos.
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* H2 com Parágrafo */}
      <div className="space-y-6 mb-16">
        <Title variant="large" align="left" className="text-white">
          Desenvolvimento e Implementação
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Este parágrafo aborda os aspectos práticos de desenvolvimento e
            implementação, fornecendo insights valiosos sobre como aplicar os
            conceitos teóricos na prática cotidiana.
          </Text>
        </div>
      </div>

      {/* H3 e 2 Colunas de Parágrafos */}
      <div className="mb-16">
        <div className="mb-8">
          <Title
            variant="small"
            align="left"
            className="text-white max-w-6xl mx-auto"
          >
            Estratégias e Abordagens
          </Title>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Text variant="medium" align="left" className="text-white block">
                Estratégias inovadoras que revolucionam a forma como abordamos
                os desafios contemporâneos, integrando tecnologia avançada com
                metodologias comprovadas para maximizar a eficiência.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                Abordagens sistemáticas que garantem a sustentabilidade dos
                resultados a longo prazo, focando na criação de soluções
                duradouras e adaptáveis às mudanças do mercado.
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* H3 e Duas Colunas de Parágrafo Novamente */}
      <div className="mb-16">
        <div className="mb-8">
          <Title
            variant="small"
            align="left"
            className="text-white max-w-6xl mx-auto"
          >
            Resultados e Benefícios
          </Title>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Text variant="medium" align="left" className="text-white block">
                Os resultados obtidos demonstram claramente a eficácia das
                metodologias implementadas, com melhorias significativas em
                todos os indicadores de performance estabelecidos.
              </Text>
            </div>
            <div>
              <Text variant="medium" align="left" className="text-white block">
                Os benefícios se estendem além das métricas quantitativas,
                incluindo melhorias qualitativas na experiência do usuário e na
                satisfação geral dos stakeholders envolvidos.
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* H2 e Parágrafo Final */}
      <div className="space-y-6">
        <Title variant="large" align="left" className="text-white">
          Considerações Finais
        </Title>
        <div className="max-w-3xl mx-auto">
          <Text variant="medium" align="left" className="text-white block">
            Em conclusão, os elementos apresentados ao longo desta seção
            demonstram a importância de uma abordagem integrada e sistemática,
            capaz de gerar resultados sustentáveis e transformadores.
          </Text>
        </div>
      </div>
    </>
  )
}

export default ComplexSection
