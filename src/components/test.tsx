import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const TracSidebar = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState('1.1')

  // Usaremos um useRef para armazenar as referências das seções
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const menuItems = [
    {
      id: 'introducao',
      title: 'Introdução',
      subitems: [
        { id: '1.1', title: 'Visão Geral' },
        { id: '1.2', title: 'Como Usar' },
        { id: '1.3', title: 'Estrutura' }
      ]
    },
    {
      id: 'manual',
      title: 'Sobre o Manual',
      subitems: [
        { id: '2.1', title: 'Objetivo' },
        { id: '2.2', title: 'Público-alvo' },
        { id: '2.3', title: 'Metodologia' }
      ]
    },
    {
      id: 'trac6',
      title: 'Sobre o Trac6',
      subitems: [
        { id: '3.1', title: 'História' },
        { id: '3.2', title: 'Missão' },
        { id: '3.3', title: 'Valores' }
      ]
    },
    {
      id: 'downloads',
      title: 'Downloads',
      subitems: [
        { id: '4.1', title: 'Arquivos Base' },
        { id: '4.2', title: 'Templates' },
        { id: '4.3', title: 'Recursos' }
      ]
    },
    {
      id: 'estrategia',
      title: 'Estratégia',
      subitems: [
        { id: '5.1', title: 'Posicionamento' },
        { id: '5.2', title: 'Messaging' },
        { id: '5.3', title: 'Audiência' }
      ]
    },
    {
      id: 'verbal',
      title: 'Verbal',
      subitems: [
        { id: '6.1', title: 'Tom de Voz' },
        { id: '6.2', title: 'Linguagem' },
        { id: '6.3', title: 'Glossário' }
      ]
    },
    {
      id: 'cores',
      title: 'Cores',
      subitems: [
        { id: '7.1', title: 'Paleta Principal' },
        { id: '7.2', title: 'Paleta Secundária' },
        { id: '7.3', title: 'Aplicações' }
      ]
    },
    {
      id: 'tipografia',
      title: 'Tipografia',
      subitems: [
        { id: '8.1', title: 'Fontes Principais' },
        { id: '8.2', title: 'Hierarquia' },
        { id: '8.3', title: 'Uso' }
      ]
    },
    {
      id: 'apoio',
      title: 'Apoio Gráfico',
      subitems: [
        { id: '9.1', title: 'Elementos' },
        { id: '9.2', title: 'Padrões' },
        { id: '9.3', title: 'Aplicações' }
      ]
    },
    {
      id: 'iconografia',
      title: 'Iconografia',
      subitems: [
        { id: '10.1', title: 'Estilo' },
        { id: '10.2', title: 'Biblioteca' },
        { id: '10.3', title: 'Construção' }
      ]
    },
    {
      id: 'inspiracoes',
      title: 'Inspirações',
      subitems: [
        { id: '11.1', title: 'Referências' },
        { id: '11.2', title: 'Mood Board' },
        { id: '11.3', title: 'Tendências' }
      ]
    }
  ]

  // Efeito para configurar o IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      // Use null para observar em relação à viewport do documento
      root: null,
      // rootMargin ajustado: top -20% significa que a seção será considerada "ativa"
      // quando seu topo estiver 20% abaixo do topo da viewport.
      // bottom -80% significa que ela deixará de ser ativa quando o topo de outra seção
      // estiver mais ou menos 80% acima da base da viewport.
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0 // Aciona assim que qualquer parte do elemento entra ou sai
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Se a seção está intersectando E está vindo de cima para baixo (rolagem para baixo)
        // ou se for a única a intersectar quando rolamos para cima
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveItem(sectionId)

          // Encontra o item principal correspondente ao subitem visível
          const parentItem = menuItems.find((item) =>
            item.subitems.some((sub) => sub.id === sectionId)
          )
          // Expande o item principal se ele não estiver expandido ou se for um novo item
          if (parentItem && expandedItem !== parentItem.id) {
            setExpandedItem(parentItem.id)
          }
        }
      })
    }, observerOptions)

    // Observa todas as seções que temos referências
    // Certifique-se de que todas as refs estejam prontas
    const currentRefs = Object.values(sectionRefs.current)
    currentRefs.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    // Limpeza: desconecta o observer quando o componente é desmontado
    return () => {
      currentRefs.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
      observer.disconnect()
    }
  }, [menuItems, expandedItem]) // activeItem não precisa ser dependência aqui para evitar loops de re-renderização

  const toggleExpand = (itemId: string) => {
    const itemToExpand = menuItems.find((item) => item.id === itemId)

    if (expandedItem === itemId) {
      setExpandedItem(null)
    } else {
      setExpandedItem(itemId)
      if (itemToExpand && itemToExpand.subitems.length > 0) {
        // Ao expandir, também rola para a seção do primeiro subitem
        const firstSubitemId = itemToExpand.subitems[0].id
        setActiveItem(firstSubitemId) // Ativa o primeiro subitem
        sectionRefs.current[firstSubitemId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Rola para o topo da seção
        })
      }
    }
  }

  const handleSubitemClick = (subitemId: string) => {
    setActiveItem(subitemId)
    // Ao clicar, rola para a seção correspondente
    sectionRefs.current[subitemId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      {/* Certifique-se de que a sidebar seja fixa e ocupe a altura total */}
      <div className="w-64 bg-gray-800 text-white flex flex-col fixed h-full overflow-y-auto z-10 top-0 left-0">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-red-500 font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-medium">trac</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                {/* Main Item */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left px-6 py-3 text-sm transition-colors duration-200 hover:bg-gray-700 flex items-center justify-between text-gray-300 hover:text-white"
                >
                  <span>{item.title}</span>
                  {expandedItem === item.id ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {/* Subitems */}
                {expandedItem === item.id && (
                  <ul className="bg-gray-850 border-l-2 border-gray-700 ml-4">
                    {item.subitems.map((subitem) => (
                      <li key={subitem.id}>
                        <button
                          onClick={() => handleSubitemClick(subitem.id)}
                          className={`w-full text-left pl-8 pr-6 py-2 text-sm transition-colors duration-200 hover:bg-gray-700 flex items-center ${
                            activeItem === subitem.id
                              ? 'bg-gray-700 text-red-400 border-r-2 border-red-500'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="mr-3 text-xs font-mono text-gray-500">
                            {subitem.id}
                          </span>
                          <span>{subitem.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      {/* O conteúdo principal deve ter um padding-left para não ficar por baixo da sidebar */}
      <div className="flex-1 bg-gray-900 p-8 ml-64">
        {' '}
        {/* Removido overflow-y-auto e h-screen aqui */}
        <div className="max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.subitems.map((subitem) => (
                <section
                  key={subitem.id}
                  id={subitem.id}
                  ref={(el) => (sectionRefs.current[subitem.id] = el)}
                  className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg min-h-[70vh]" // Aumentei o min-h para facilitar a detecção
                >
                  <h1 className="text-3xl font-bold text-white mb-4">
                    Seção {subitem.id}: {subitem.title}
                  </h1>
                  <p className="text-gray-400 text-lg">
                    Este é o conteúdo detalhado para a seção "{subitem.title}"
                    (ID: {subitem.id}).
                  </p>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mt-2">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="mt-2">
                      Este é um parágrafo extra para garantir que cada seção
                      tenha conteúdo suficiente para permitir a rolagem e a
                      detecção do IntersectionObserver.
                    </p>
                    <p className="mt-2">
                      Continuando com mais conteúdo para preencher o espaço e
                      testar a rolagem. É importante que as seções sejam altas o
                      suficiente para que o IntersectionObserver possa ter uma
                      boa área de detecção.
                    </p>
                  </div>
                </section>
              ))}
            </React.Fragment>
          ))}
          {/* Adicione um espaço extra no final para que as últimas seções possam rolar até o topo */}
          <div className="h-[80vh]"></div>{' '}
          {/* Aumentado para garantir que a última seção possa ser ativada */}
        </div>
      </div>
    </div>
  )
}

export default TracSidebar
