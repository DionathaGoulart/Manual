import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'

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
import TipoSection from '@/sections/Logotipo/Tipo'
import VariacoesSection from '@/sections/Logotipo/Variacoes'
import MargemSection from '@/sections/Logotipo/Margem'

import ContextoSection from '@/sections/Cores/Contexto'
import CoresSection from '@/sections/Cores/Cores'

import PrincipalSection from '@/sections/Tipografia/Principal'

import MolaSection from '@/sections/Apoio/Mola'
import CaixaSection from '@/sections/Apoio/Caixa'
import GraficSection from '@/sections/Apoio/Grafic'

import GuiaSection from '@/sections/Iconografia/Guia'
import ExemplosGuiaSection from '@/sections/Iconografia/Exemplos'

import InspiSection from '@/sections/Inspiracoes/Inspi'

const Home: React.FC = () => {
  const [activeMainSection, setActiveMainSection] = useState('1') // Seção principal ativa
  const [activeItem, setActiveItem] = useState('1.1') // Item específico ativo
  const [isScrollingByClick, setIsScrollingByClick] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  // Memoização das seções para evitar recriação desnecessária
  const allSections = useMemo(
    () => ({
      '1': [
        { id: '1.1', content: <ManualSection /> },
        { id: '1.2', content: <AboutSection /> },
        { id: '1.3', content: <DownloadSection /> }
      ],
      '2': [
        { id: '2.1', content: <FilosofiaSection /> },
        { id: '2.2', content: <InimigoSection /> },
        { id: '2.3', content: <ValoresSection /> },
        { id: '2.4', content: <DesvaloresSection /> }
      ],
      '3': [
        { id: '3.1', content: <PersonalidadeSection /> },
        { id: '3.2', content: <ConceitoSection /> },
        { id: '3.3', content: <VocabularioSection /> },
        { id: '3.4', content: <ExemplosSection /> }
      ],
      '4': [
        { id: '4.1', content: <LogoSection /> },
        { id: '4.2', content: <TipoSection /> },
        { id: '4.3', content: <VariacoesSection /> },
        { id: '4.4', content: <MargemSection /> }
      ],
      '5': [
        { id: '5.1', content: <ContextoSection /> },
        { id: '5.2', content: <CoresSection /> }
      ],
      '6': [{ id: '6.1', content: <PrincipalSection /> }],
      '7': [
        { id: '7.1', content: <MolaSection /> },
        { id: '7.2', content: <CaixaSection /> },
        { id: '7.3', content: <GraficSection /> }
      ],
      '8': [
        { id: '8.1', content: <GuiaSection /> },
        { id: '8.2', content: <ExemplosGuiaSection /> }
      ],
      '9': [{ id: '9', content: <InspiSection /> }]
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

          // Não atualiza a seção principal quando está navegando via scroll
          // apenas quando clica diretamente nos itens da sidebar
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

      // Se é um clique em uma seção principal, muda a seção ativa
      if (mainSectionId && mainSectionId !== activeMainSection) {
        setActiveMainSection(mainSectionId)
        // Pega o primeiro item da nova seção
        const newSections =
          allSections[mainSectionId as keyof typeof allSections]
        const firstItemId = newSections?.[0]?.id
        if (firstItemId) {
          setActiveItem(firstItemId)
          setIsScrollingByClick(true)

          // Aguarda um frame para garantir que o DOM foi atualizado
          setTimeout(() => {
            sectionRefs.current[firstItemId]?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
            setTimeout(() => setIsScrollingByClick(false), 800)
          }, 50)
        }
      }
      // Se é um clique em um subitem da mesma seção
      else if (subitemId) {
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

      {/* Renderização das seções da seção principal ativa */}
      {currentSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el
          }}
          className={sectionClasses}
        >
          <div className="max-w-4xl mx-auto w-full">{section.content}</div>
        </section>
      ))}

      {/* Espaçador final */}
      <div className={spacerClasses} />
    </div>
  )
}

export default Home
