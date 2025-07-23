import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const PersonalidadeSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Personalidade
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Se nossa marca fosse uma pessoa, ela seria a parceira propulsora. É a
          aliada estratégica que entende que a atenção aos detalhes (tracking) é
          o que alimenta a força para avançar (traction).
        </Text>

        <Text variant="medium" align="left" className="text-white block">
          Para facilitar, usamos o princípio "Somos X, mas não Y":
        </Text>

        <TwoColumnText
          leftTitle="Somos.."
          leftParagraph={
            <>
              Companheira e Dedicada: Estamos genuinamente investidos no sucesso
              do cliente. Nossa comunicação é atenta, busca entender e reflete a
              "atenção real" que faltava no mercado.
              <br />
              <br />
              Propulsora e Energética: Nossa linguagem é ativa e transmite
              movimento. Falamos em impulso, avanço e aceleração. Somos a força
              que gera a tração, sempre com um propósito claro.
              <br />
              <br />
              Pragmática e Focada em Vendas: Somos obcecados pelo que funciona.
              Nossa comunicação é direta ao ponto e conecta as ações de
              marketing ao impacto no caixa.
              <br />
              <br />
              Confiante e Resiliente: Falamos com a segurança de quem domina o
              que faz. Como um sistema de suspensão, nossa natureza é adaptável,
              absorvendo impactos para manter o percurso estável.
            </>
          }
          rightTitle="NÃO somos..."
          rightParagraph={
            <>
              "Amigona" ou Casual: Não usamos gírias ou uma linguagem que
              banalize a seriedade do nosso compromisso. Nossa proximidade é
              focada no resultado.
              <br />
              <br />
              Agressiva ou Apressada: Não somos a "máquina de vendas" que
              atropela tudo. Evitamos o tom do "crescimento a qualquer custo".
              <br />
              <br />
              Teórica ou Focada em Vaidade: Não nos apaixonamos por relatórios
              bonitos ou métricas de vaidade. Se uma ação não tem potencial para
              vender, ela não tem espaço em nossa estratégia.
              <br />
              <br />
              Autoritária ou Rígida: Confiança não é arrogância. Nunca impomos
              regras. Nossa flexibilidade é o que nos permite encontrar a melhor
              rota para cada parceiro, em vez de forçar um "método" engessado.
            </>
          }
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>
    </>
  )
}

export default PersonalidadeSection
