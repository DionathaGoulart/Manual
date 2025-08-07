import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'
import ImageGrid from '@/ui/Images'

const ContextoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Introdução
      </Title>
      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Em nossa identidade, não existem acidentes. Cada elemento é uma
          decisão estratégica, uma declaração de intenções. Nossas cores são a
          prova disso. Elas não foram escolhidas para agradar; foram escolhidas
          para provocar.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Juntos, azul e preto não são apenas uma paleta de cores. São a nossa
          bandeira de batalha.
        </Text>
        <ImageGrid
          flexibleAspect
          fullImage
          variant={1}
          images={['/grenal.svg']}
        />
        <Title variant="small" align="left" className="text-white">
          O Azul dO CONTRA
        </Title>
        <Text variant="large" align="left" className="text-white block">
          Nosso azul nasce da oposição. É uma resposta direta à V4 Company e ao
          seu vermelho. Sendo duas empresas com raízes gaúchas, abraçamos a
          rivalidade cultural mais icônica do nosso estado: o Gre-Nal. Se eles
          são o vermelho, nós somos o azul.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Essa dinâmica de opostos é um arquétipo de todas as grandes disputas:
          Pepsi contra Coca-Cola, Boi Caprichoso contra Boi Garantido. O azul é,
          por definição, a cor do desafiante, da alternativa que vem para
          quebrar a hegemonia. Ele representa nossa posição de forma instantânea
          e universal.
        </Text>

        <Title variant="small" align="left" className="text-white">
          O Preto da Potência
        </Title>
        <Text variant="large" align="left" className="text-white block">
          Sabemos que o vermelho é uma cor naturalmente potente. Por isso, nosso
          azul não age sozinho. O preto não é um fundo neutro; ele é um
          amplificador estratégico.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Ele existe para dar ao nosso azul o peso, a seriedade e a autoridade
          necessários para equilibrar e superar a potência do vermelho. Enquanto
          o fundo branco dilui, o preto concentra. Ele elimina o ruído visual e
          faz com que nossa mensagem de ruptura se destaque com força máxima.
        </Text>
      </div>
    </>
  )
}

export default ContextoSection
