import React from 'react'
import Title from '@ui/Tittle'
import Text from '@ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const DesvaloresSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Desvalores{' '}
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Na trac©, temos clareza sobre o que não somos, pois é essa clareza
          que nos permite ser a parceira que nossos clientes precisam.
        </Text>

        <TwoColumnText
          leftTitle="Autoritário"
          leftParagraph="Não estamos aqui para ditar um caminho. Acreditamos que a arrogância é inimiga do tracking. Nosso papel não é dar ordens, mas construir a rota em conjunto, usando nossa expertise para guiar e nossa flexibilidade para ajustar sempre que o terreno exigir."
          rightTitle="“Amigão”"
          rightParagraph="Nossa proximidade é profunda, mas tem um foco absoluto: o traction. Respeitamos demais o investimento do cliente para gastar energia em qualquer coisa que não seja o avanço do negócio. Somos o parceiro para confiar as decisões importantes, não aquele com quem se joga conversa fora."
          gap="gap-12"
          className="max-w-6xl mx-auto"
          titleClassName="text-white font-orbit-gate text-[23px] leading-[100%] tracking-[0%] uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer text-[15px] leading-[22px] font-semibold tracking-[0.01em]"
        />
      </div>
    </>
  )
}

export default DesvaloresSection
