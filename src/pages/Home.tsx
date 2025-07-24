import CaixaSection from '@/sections/Apoio/Caixa'
import GraficSection from '@/sections/Apoio/Grafic'
import MolaSection from '@/sections/Apoio/Mola'
import ContextoSection from '@/sections/Cores/Contexto'
import CoresSection from '@/sections/Cores/Cores'
import ExemplosGuiaSection from '@/sections/Iconografia/Exemplos'
import GuiaSection from '@/sections/Iconografia/Guia'
import InspiSection from '@/sections/Inspiracoes/Inspi'
import AboutSection from '@/sections/Intro/About'
import DownloadSection from '@/sections/Intro/Downloads'
import ManualSection from '@/sections/Intro/Manual'
import LogoSection from '@/sections/Logotipo/Logo'
import MargemSection from '@/sections/Logotipo/Margem'
import TipoSection from '@/sections/Logotipo/Tipo'
import VariacoesSection from '@/sections/Logotipo/Variacoes'
import DesvaloresSection from '@/sections/Strat/Desvalores'
import FilosofiaSection from '@/sections/Strat/Filosofia'
import InimigoSection from '@/sections/Strat/Inimigo'
import ValoresSection from '@/sections/Strat/Valores'
import StratSection from '@/sections/Strategy'
import PrincipalSection from '@/sections/Tipografia/Principal'
import ConceitoSection from '@/sections/Verbal/Conceito'
import ExemplosSection from '@/sections/Verbal/Exemplos'
import PersonalidadeSection from '@/sections/Verbal/Personalidade'
import VocabularioSection from '@/sections/Verbal/Vocabulario'
import React, { useState, useEffect, useRef } from 'react'

const Home: React.FC = () => {
  const [activeItem, setActiveItem] = useState('1.1')
  const [isScrollingByClick, setIsScrollingByClick] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const sections = [
    {
      id: '1.1',
      content: <ManualSection />
    },
    {
      id: '1.2',
      content: <AboutSection />
    },
    {
      id: '1.3',
      content: <DownloadSection />
    },
    {
      id: '2.1',
      content: <FilosofiaSection />
    },
    {
      id: '2.2',
      content: <InimigoSection />
    },
    {
      id: '2.3',
      content: <ValoresSection />
    },
    {
      id: '2.4',
      content: <DesvaloresSection />
    },
    {
      id: '3.1',
      content: <PersonalidadeSection />
    },
    {
      id: '3.2',
      content: <ConceitoSection />
    },
    {
      id: '3.3',
      content: <VocabularioSection />
    },
    {
      id: '3.4',
      content: <ExemplosSection />
    },
    {
      id: '4.1',
      content: <LogoSection />
    },
    {
      id: '4.2',
      content: <TipoSection />
    },
    {
      id: '4.3',
      content: <VariacoesSection />
    },
    {
      id: '4.4',
      content: <MargemSection />
    },
    {
      id: '5.1',
      content: <ContextoSection />
    },
    {
      id: '5.2',
      content: <CoresSection />
    },
    {
      id: '6.1',
      content: <PrincipalSection />
    },
    {
      id: '7.1',
      content: <MolaSection />
    },
    {
      id: '7.2',
      content: <CaixaSection />
    },
    {
      id: '7.3',
      content: <GraficSection />
    },
    {
      id: '8.1',
      content: <GuiaSection />
    },
    {
      id: '8.2',
      content: <ExemplosGuiaSection />
    },
    {
      id: '9.1',
      content: <InspiSection />
    }
  ]

  // Intersection Observer para detectar seção ativa
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
          // Dispatch evento customizado para o MainLayout
          window.dispatchEvent(
            new CustomEvent('sectionChange', {
              detail: { activeSection: sectionId }
            })
          )
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
  }, [isScrollingByClick])

  // Listener para cliques no sidebar
  useEffect(() => {
    const handleSidebarClick = (event: CustomEvent) => {
      const { subitemId } = event.detail
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

    window.addEventListener('sidebarClick', handleSidebarClick as EventListener)

    return () => {
      window.removeEventListener(
        'sidebarClick',
        handleSidebarClick as EventListener
      )
    }
  }, [])

  return (
    <div className="mt-40 max-w-xl">
      {/* Mensagem de Ajuda - responsiva */}
      <div
        className="
          /* Mobile - canto superior direito */
          absolute top-4 right-4 z-50
          text-right text-white/70 text-xs leading-tight

          /* Desktop - fixa no espaço reservado */
          lg:fixed lg:top-12 lg:right-12 lg:z-50
          lg:text-sm lg:leading-relaxed lg:text-white/60

          /* Ajustes para telas maiores */
          xl:top-16 xl:right-16
          2xl:top-20 2xl:right-20
        "
      >
        <div className="text-start">
          <div className="font-medium">Última atualização:</div>
          <div className="text-white/60">24/07/2025</div>
          <div className="mt-2 font-medium">Precisa de ajuda?</div>
          <div className="text-white/60">@051jeferson</div>
        </div>
      </div>

      {/* Sections com espaçamento harmonizado */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el
          }}
          className="
              /* Responsivo */
              sm:mb-20
              md:mb-24
              lg:mb-28
              xl:mb-32
              2xl:mb-24
            "
        >
          {/* Container do conteúdo centralizado */}
          <div className="max-w-4xl mx-auto w-full">{section.content}</div>
        </section>
      ))}

      {/* Espaço extra para scroll com altura responsiva */}
      <div
        className="
          h-[60vh]
          md:h-[70vh]
          lg:h-[80vh]
        "
      ></div>
    </div>
  )
}

export default Home
