import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const InimigoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Inimigo
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          O inimigo que a trac© combate é a mentalidade de "agência-esteira",
          obcecada pelo próprio crescimento, que se traduz em um tracking
          superficial e, por consequência, uma traction que não move o ponteiro
          do negócio do cliente.
        </Text>
      </div>
    </>
  )
}

export default InimigoSection
