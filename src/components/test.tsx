import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const TracSidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [activeItem, setActiveItem] = useState('1.1')

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

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  const handleSubitemClick = (subitemId: string) => {
    setActiveItem(subitemId)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
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
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                {/* Main Item */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left px-6 py-3 text-sm transition-colors duration-200 hover:bg-gray-700 flex items-center justify-between text-gray-300 hover:text-white"
                >
                  <span>{item.title}</span>
                  {expandedItems.includes(item.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {/* Subitems */}
                {expandedItems.includes(item.id) && (
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
      <div className="flex-1 bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Seção {activeItem}
          </h1>
          <p className="text-gray-400 text-lg">
            Conteúdo da seção "{activeItem}" seria exibido aqui.
          </p>

          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-3">
              Exemplo de Conteúdo
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Este é um exemplo de como o conteúdo principal seria exibido ao
              lado da sidebar. O item ativo atual é:{' '}
              <span className="text-red-400 font-semibold">{activeItem}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TracSidebar
