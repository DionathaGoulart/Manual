import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const FotografiaSection: React.FC = () => {
  return (
    <>
      <Title
        bold
        variant="large"
        align="left"
        className="text-white font-ss01 font-ligatures font-dlig"
      >
        foto<span className="font-ss02">grafia</span>
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nossas imagens não são momentos parados; são instantes de movimento
          capturados. Cada fotografia deve transmitir a sensação de que algo
          está acontecendo, de que a inércia é nosso maior inimigo. Para
          alcançar essa representação visual da nossa inquietação permanente,
          seguimos alguns princípios chave:
        </Text>

        <TwoColumnText
          leftTitle="Ambiência"
          leftParagraph={
            <>
              Priorizamos ambientes com tons mais escuros, criando uma atmosfera
              de intensidade e foco. Essa escuridão serve como pano de fundo
              para o elemento central da imagem.
            </>
          }
          rightTitle="Iluminação"
          rightParagraph={
            <>
              A luz azul, ecoando a cor da nossa marca e da nossa rivalidade
              estratégica, deve ser utilizada para destacar pontos focais e
              criar contrastes dramáticos. Essa iluminação direcionada adiciona
              uma camada de energia e modernidade às imagens.
            </>
          }
          gap="gap-12"
        />

        <TwoColumnText
          leftTitle="Movimento"
          leftParagraph={
            <>
              O elemento mais crucial da nossa identidade fotográfica é a
              captura do movimento. Seja o gesto de uma mão digitando
              rapidamente, o rastro de luz de um objeto em ação ou o sutil
              desfoque de alguém em movimento, todas as imagens devem demonstrar
              atividade.
            </>
          }
          rightTitle="Desfoque de Movimento"
          rightParagraph={
            <>
              Para intensificar a sensação de inquietação e dinamismo, o efeito
              de desfoque de movimento deve ser sempre aplicado. Esse borrão
              intencional, característico de fotografias de longa exposição ou
              de objetos em rápida movimentação, traduz visualmente a nossa
              recusa em permanecer parados e a busca constante por resultados.
            </>
          }
          gap="gap-12"
        />

        <Text variant="large" align="left" className="text-white block">
          O objetivo da nossa identidade fotográfica é causar uma sensação
          visceral de quebra e progresso. Cada imagem deve ser um lembrete
          visual de que na Vextro, o movimento é constante. Não capturamos a
          calmaria; celebramos a agitação produtiva.
        </Text>
      </div>
    </>
  )
}

export default FotografiaSection
