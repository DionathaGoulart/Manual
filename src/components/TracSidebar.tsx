import React, { useState, useEffect, useRef } from 'react'
import Sidebar from './Sidebar'

interface Subitem {
  id: string
  title: string
}

interface MenuItemData {
  id: string
  title: string
  subitems: Subitem[]
}

const TracSidebar: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState('1.1')
  const [isScrollingByClick, setIsScrollingByClick] = useState(false)

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const menuItems: MenuItemData[] = [
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

  // Logic to map a subitem ID to its parent item ID for initial expansion
  useEffect(() => {
    // This effect runs once on mount to set the initial expanded item based on activeItem
    const initialParent = menuItems.find((item) =>
      item.subitems.some((sub) => sub.id === activeItem)
    )
    if (initialParent) {
      setExpandedItem(initialParent.id)
    }
  }, []) // Empty dependency array means this runs only once

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingByClick) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveItem(sectionId)

          const parentItem = menuItems.find((item) =>
            item.subitems.some((sub) => sub.id === sectionId)
          )
          if (parentItem && expandedItem !== parentItem.id) {
            setExpandedItem(parentItem.id)
          }
        }
      })
    }, observerOptions)

    const currentRefs = Object.values(sectionRefs.current)
    currentRefs.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      currentRefs.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
      observer.disconnect()
    }
  }, [menuItems, expandedItem, isScrollingByClick])

  const toggleExpand = (itemId: string) => {
    const itemToExpand = menuItems.find((item) => item.id === itemId)

    if (expandedItem === itemId) {
      setExpandedItem(null)
    } else {
      setExpandedItem(itemId)
      if (itemToExpand && itemToExpand.subitems.length > 0) {
        const firstSubitemId = itemToExpand.subitems[0].id
        setActiveItem(firstSubitemId)

        setIsScrollingByClick(true)
        sectionRefs.current[firstSubitemId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        setTimeout(() => {
          setIsScrollingByClick(false)
        }, 800)
      }
    }
  }

  const handleSubitemClick = (subitemId: string) => {
    setActiveItem(subitemId)
    setIsScrollingByClick(true)
    sectionRefs.current[subitemId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setTimeout(() => {
      setIsScrollingByClick(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex">
      {/* Sidebar Component */}
      <Sidebar
        menuItems={menuItems}
        expandedItem={expandedItem}
        activeItem={activeItem}
        onToggleExpand={toggleExpand}
        onSubitemClick={handleSubitemClick}
        logoSrc="https://via.placeholder.com/150x50?text=Seu+Logo" // Passa o src do logo
        logoAlt="Logo Trac6" // Passa o alt do logo
      />

      {/* Main Content */}
      <div className="flex-1 bg-gray-900 p-8 ml-64">
        <div className="max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.subitems.map((subitem) => (
                <section
                  key={subitem.id}
                  id={subitem.id}
                  ref={(el) => {
                    sectionRefs.current[subitem.id] = el
                  }}
                  className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg min-h-[70vh]"
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
          <div className="h-[80vh]"></div>
        </div>
      </div>
    </div>
  )
}

export default TracSidebar
