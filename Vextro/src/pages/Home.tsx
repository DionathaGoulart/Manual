import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

// Imports organizados por categoria
import ManualSection from '@/sections/Intro/Manual'
import AboutSection from '@/sections/Intro/About'
import DownloadSection from '@/sections/Intro/Downloads'

import FilosofiaSection from '@/sections/Strat/Filosofia'
import InimigoSection from '@/sections/Strat/Inimigo'
import ValoresSection from '@/sections/Strat/Valores'
import DesvaloresSection from '@/sections/Strat/Desvalores'

import PersonalidadeSection from '@/sections/Verbal/Personalidade'
import ConceitoSection from '@/sections/Verbal/Conceito'
import VocabularioSection from '@/sections/Verbal/Vocabulario'
import ExemplosSection from '@/sections/Verbal/Exemplos'

import LogoSection from '@/sections/Logotipo/Logo'
import VariacoesSection from '@/sections/Logotipo/Variacoes'
import MargemSection from '@/sections/Logotipo/Margem'

import ContextoSection from '@/sections/Cores/Contexto'
import CoresSection from '@/sections/Cores/Cores'

import PrincipalSection from '@/sections/Tipografia/Principal'

import InspiSection from '@/sections/Inspiracoes/Inspi'
import InstitucionalSection from '@/sections/Tipografia/Institucional'
import AplicacaoSection from '@/sections/Tipografia/Aplicacao'
import GraficoSection from '@/sections/Apoio/Grafico'
import FotografiaSection from '@/sections/Fotografia/Fotografia'
import PromptSection from '@/sections/Fotografia/Prompt'
import RefsSection from '@/sections/Fotografia/Refs'

const Home: React.FC = () => {
  const [activeMainSection, setActiveMainSection] = useState('1')
  const [activeItem, setActiveItem] = useState('1.1')
  const [isScrollingByClick, setIsScrollingByClick] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Configuração de animações para cada seção
  const sectionAnimations = useMemo(() => {
    const animations = [
      'fadeUp',
      'fadeLeft',
      'fadeRight',
      'scale',
      'slideUp'
    ] as const
    return animations
  }, [])

  const getSectionAnimation = useCallback(
    (index: number) => {
      return sectionAnimations[index % sectionAnimations.length]
    },
    [sectionAnimations]
  )

  // Mapeamento de todas as seções organizadas por seção principal
  const allSections = useMemo(
    () => ({
      '1': [
        {
          id: '1.1',
          content: <ManualSection />,
          animation: 'fadeUp' as const,
          delay: 0
        },
        {
          id: '1.2',
          content: <AboutSection />,
          animation: 'fadeLeft' as const,
          delay: 100
        },
        {
          id: '1.3',
          content: <DownloadSection />,
          animation: 'fadeRight' as const,
          delay: 200
        }
      ],
      '2': [
        {
          id: '2.1',
          content: <FilosofiaSection />,
          animation: 'scale' as const,
          delay: 0
        },
        {
          id: '2.2',
          content: <InimigoSection />,
          animation: 'slideUp' as const,
          delay: 100
        },
        {
          id: '2.3',
          content: <ValoresSection />,
          animation: 'fadeUp' as const,
          delay: 200
        },
        {
          id: '2.4',
          content: <DesvaloresSection />,
          animation: 'fadeLeft' as const,
          delay: 300
        }
      ],
      '3': [
        {
          id: '3.1',
          content: <PersonalidadeSection />,
          animation: 'fadeRight' as const,
          delay: 0
        },
        {
          id: '3.2',
          content: <VocabularioSection />,
          animation: 'scale' as const,
          delay: 100
        },
        {
          id: '3.3',
          content: <ExemplosSection />,
          animation: 'slideUp' as const,
          delay: 200
        },
        {
          id: '3.4',
          content: <ConceitoSection />,
          animation: 'fadeUp' as const,
          delay: 300
        }
      ],
      '4': [
        {
          id: '4.1',
          content: <LogoSection />,
          animation: 'fadeLeft' as const,
          delay: 0
        },
        {
          id: '4.2',
          content: <VariacoesSection />,
          animation: 'fadeRight' as const,
          delay: 100
        },
        {
          id: '4.3',
          content: <MargemSection />,
          animation: 'scale' as const,
          delay: 200
        }
      ],
      '5': [
        {
          id: '5.1',
          content: <ContextoSection />,
          animation: 'slideUp' as const,
          delay: 0
        },
        {
          id: '5.2',
          content: <CoresSection />,
          animation: 'fadeUp' as const,
          delay: 100
        }
      ],
      '6': [
        {
          id: '6.1',
          content: <PrincipalSection />,
          animation: 'fadeLeft' as const,
          delay: 0
        },
        {
          id: '6.2',
          content: <InstitucionalSection />,
          animation: 'fadeRight' as const,
          delay: 100
        },
        {
          id: '6.3',
          content: <AplicacaoSection />,
          animation: 'scale' as const,
          delay: 200
        }
      ],
      '7': [
        {
          id: '7',
          content: <GraficoSection />,
          animation: 'slideUp' as const,
          delay: 0
        }
      ],
      '8': [
        {
          id: '8.1',
          content: <FotografiaSection />,
          animation: 'fadeUp' as const,
          delay: 0
        },
        {
          id: '8.2',
          content: <PromptSection />,
          animation: 'fadeLeft' as const,
          delay: 100
        },
        {
          id: '8.3',
          content: <RefsSection />,
          animation: 'fadeRight' as const,
          delay: 200
        }
      ],
      '9': [
        {
          id: '9',
          content: <InspiSection />,
          animation: 'scale' as const,
          delay: 0
        }
      ]
    }),
    []
  )

  // Seções da seção principal ativa
  const currentSections = useMemo(() => {
    return allSections[activeMainSection as keyof typeof allSections] || []
  }, [activeMainSection, allSections])

  // Configurações do observer memoizadas
  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    }),
    []
  )

  // Callback para o observer
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (isScrollingByClick) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveItem(sectionId)

          window.dispatchEvent(
            new CustomEvent('sectionChange', {
              detail: { activeSection: sectionId }
            })
          )
        }
      })
    },
    [isScrollingByClick]
  )

  // Setup do Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )
    const currentRefs = Object.values(sectionRefs.current)

    currentRefs.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      currentRefs.forEach((section) => {
        if (section) observer.unobserve(section)
      })
      observer.disconnect()
    }
  }, [handleIntersection, observerOptions, currentSections])

  // Handler para cliques do sidebar
  const handleSidebarClick = useCallback(
    (event: CustomEvent) => {
      const { subitemId, mainSectionId } = event.detail

      if (mainSectionId && mainSectionId !== activeMainSection) {
        setActiveMainSection(mainSectionId)
        const newSections =
          allSections[mainSectionId as keyof typeof allSections]
        const firstItemId = newSections?.[0]?.id
        if (firstItemId) {
          setActiveItem(firstItemId)
          setIsScrollingByClick(true)

          setTimeout(() => {
            sectionRefs.current[firstItemId]?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
            setTimeout(() => setIsScrollingByClick(false), 800)
          }, 50)
        }
      } else if (subitemId) {
        setActiveItem(subitemId)
        setIsScrollingByClick(true)

        sectionRefs.current[subitemId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })

        setTimeout(() => setIsScrollingByClick(false), 800)
      }
    },
    [activeMainSection, allSections]
  )

  // Listener para eventos do sidebar
  useEffect(() => {
    window.addEventListener('sidebarClick', handleSidebarClick as EventListener)
    return () =>
      window.removeEventListener(
        'sidebarClick',
        handleSidebarClick as EventListener
      )
  }, [handleSidebarClick])

  // Classes CSS memoizadas
  const helpBoxClasses = `
    absolute top-20 right-4 z-50 text-right text-white/70 text-xs leading-tight
    lg:fixed lg:top-44 lg:right-12 lg:z-50 lg:text-sm lg:leading-relaxed lg:text-white/60
    xl:top-48 xl:right-16 2xl:top-52 2xl:right-20
  `
    .trim()
    .replace(/\s+/g, ' ')

  const sectionClasses = `
    mb-20
    sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-24
  `
    .trim()
    .replace(/\s+/g, ' ')

  const spacerClasses = `
    h-[60vh] md:h-[70vh] lg:h-[80vh]
  `
    .trim()
    .replace(/\s+/g, ' ')

  return (
    <div className="mt-40 max-w-xl">
      {/* Caixa de Ajuda */}
      <div className={helpBoxClasses}>
        <div className="text-start">
          <div className="mt-2 font-medium">Última atualização:</div>
          <div className="text-white/60">24/07/2025</div>
          <div className="mt-2 font-medium">Precisa de ajuda?</div>
          <div className="text-white/60">@051jeferson</div>
        </div>
      </div>

      {/* Renderização das seções da seção principal ativa com animações */}
      {currentSections.map((section) => (
        <AnimatedSection
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el
          }}
          animation={section.animation}
          delay={section.delay}
          duration={600}
          className={sectionClasses}
        >
          <div className="max-w-4xl mx-auto w-full">{section.content}</div>
        </AnimatedSection>
      ))}

      {/* Espaçador final */}
      <div className={spacerClasses} />
    </div>
  )
}

export default Home
