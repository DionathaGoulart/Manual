import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const PersonalidadeSection: React.FC = () => {
  return (
    <>
      <Title bold variant="large" align="left" className="text-white font-ss02">
        Personalidade
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Somos a consequência de um mercado satisfeito com o mediano. Nascemos
          da insatisfação e da inquietação, com uma filosofia única: "O bom não
          basta".
        </Text>

        <TwoColumnText
          leftTitle="SOMOS"
          leftParagraph={
            <>
              Inquietos
              <br />
              Provocadores
              <br />
              Diretos
              <br />
              Insatisfeitos
              <br />
            </>
          }
          rightTitle="NÃO SOMOS"
          rightParagraph={
            <>
              Ansiosos
              <br />
              Agressivos
              <br />
              Grosseiros
              <br />
              Negativos
              <br />
            </>
          }
          gap="gap-12"
          titleClassName="text-white font-orbit-gate  uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer font-semibold"
        />
      </div>
    </>
  )
}

export default PersonalidadeSection
