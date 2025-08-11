import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const ManualSection: React.FC = () => {
  return (
    <>
      {/* Primeira Parte */}
      <Title variant="large" align="left" className="text-white">
        Sobre o{' '}
        <span
          className="
      font-medium
      font-ss02
    "
        >
          Manual
        </span>
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Este manual não é um livro de regras, mas uma declaração. É a
          codificação da nossa revolta, o guia que garante que nossa voz nunca
          seja diluída e nossa mensagem permaneça afiada. Não o use para limitar
          a criatividade, mas para armá-la.
        </Text>

        <Text variant="large" align="left" className="text-white block">
          O objetivo aqui não é criar uma comunicação segura, mas sim garantir
          que cada palavra, cada design e cada ação sejam inconfundivelmente
          Vextro©: uma força de desconstrução focada em um único objetivo — o
          resultado radical para o cliente.
        </Text>
      </div>
    </>
  )
}

export default ManualSection
