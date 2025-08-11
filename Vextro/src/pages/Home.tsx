import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import {
  AboutSection,
  AplicacaoSection,
  ConceitoSection,
  ContextoSection,
  CoresSection,
  DesvaloresSection,
  DownloadSection,
  ExemplosSection,
  FilosofiaSection,
  FotografiaSection,
  GraficoSection,
  InimigoSection,
  InspiSection,
  InstitucionalSection,
  LogoSection,
  ManualSection,
  MargemSection,
  PersonalidadeSection,
  PrincipalSection,
  PromptSection,
  RefsSection,
  ValoresSection,
  VariacoesSection,
  VocabularioSection
} from '@/sections'

const Home: React.FC = () => {
  const [activeMainSection, setActiveMainSection] = useState('1')
  const [activeItem, setActiveItem] = useState('1.1')
  const [isScrollingByClick, setIsScrollingByClick] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Configuração de animações
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
        { id: '3.2', content: <VocabularioSection /> },
        { id: '3.3', content: <ExemplosSection /> },
        { id: '3.4', content: <ConceitoSection /> }
      ],
      '4': [
        { id: '4.1', content: <LogoSection /> },
        { id: '4.2', content: <VariacoesSection /> },
        { id: '4.3', content: <MargemSection /> }
      ],
      '5': [
        { id: '5.1', content: <ContextoSection /> },
        { id: '5.2', content: <CoresSection /> }
      ],
      '6': [
        { id: '6.1', content: <PrincipalSection /> },
        { id: '6.2', content: <InstitucionalSection /> },
        { id: '6.3', content: <AplicacaoSection /> }
      ],
      '7': [{ id: '7', content: <GraficoSection /> }],
      '8': [
        { id: '8.1', content: <FotografiaSection /> },
        { id: '8.2', content: <PromptSection /> },
        { id: '8.3', content: <RefsSection /> }
      ],
      '9': [{ id: '9', content: <InspiSection /> }]
    }),
    []
  )

  // Seções da seção principal ativa
  const currentSections = useMemo(() => {
    return allSections[activeMainSection as keyof typeof allSections] || []
  }, [activeMainSection, allSections])

  // Função para scroll suave
  const smoothScrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (!element) return

    const yOffset = -80 // Offset para compensar headers fixos
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }, [])

  // Intersection Observer para detectar seção ativa no scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingByClick) return

        // Encontra a seção mais visível
        let maxRatio = 0
        let mostVisibleSection = ''

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })

        if (mostVisibleSection && mostVisibleSection !== activeItem) {
          setActiveItem(mostVisibleSection)

          // Dispara evento para sincronizar com o sidebar
          window.dispatchEvent(
            new CustomEvent('sectionChange', {
              detail: { activeSection: mostVisibleSection }
            })
          )
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    // Observa todas as seções que existem
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [activeItem, isScrollingByClick])

  // Handler para cliques do sidebar
  const handleSidebarClick = useCallback(
    (event: CustomEvent) => {
      const { sectionId, parentId, isDirect } = event.detail

      if (!sectionId) return

      // Ativa flag de scroll programático
      setIsScrollingByClick(true)

      // Limpa timeout anterior
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Para itens diretos (7, 9)
      if (isDirect) {
        setActiveMainSection(sectionId)
        setActiveItem(sectionId)

        // Limpa as refs antigas e scroll para o topo
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      }
      // Para itens com seção pai
      else if (parentId) {
        setActiveMainSection(parentId)
        setActiveItem(sectionId)

        // Limpa as refs antigas e scroll para o topo
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      }
      // Para subitens na mesma seção
      else {
        setActiveItem(sectionId)
        smoothScrollToSection(sectionId)
      }

      // Desativa a flag após o scroll
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrollingByClick(false)
      }, 1200)
    },
    [smoothScrollToSection]
  )

  // Listener para eventos do sidebar
  useEffect(() => {
    window.addEventListener('sidebarClick', handleSidebarClick as EventListener)

    return () => {
      window.removeEventListener(
        'sidebarClick',
        handleSidebarClick as EventListener
      )
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleSidebarClick])

  // Atualiza a seção principal quando o activeItem muda via scroll
  useEffect(() => {
    const mainSection = activeItem.includes('.')
      ? activeItem.split('.')[0]
      : activeItem
    if (mainSection !== activeMainSection) {
      setActiveMainSection(mainSection)
    }
  }, [activeItem, activeMainSection])

  // Classes CSS
  const helpBoxClasses = `
  font-avantique
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
    h-[1vh] md:h-[1vh] lg:h-[1vh]
  `
    .trim()
    .replace(/\s+/g, ' ')

  return (
    <div className="mt-40">
      {/* Caixa de Ajuda */}
      <div className={helpBoxClasses}>
        <div className="text-start">
          <div className="mt-2 font-medium">Última atualização:</div>
          <div className="text-white/60">08/08/2025</div>
          <div className="mt-2 font-medium">Precisa de ajuda?</div>
          <div className="text-white/60">@051jeferson</div>
        </div>
      </div>

      {/* Renderização das seções da seção principal ativa com animações */}
      {currentSections.map((section, index) => (
        <AnimatedSection
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el
          }}
          animation={getSectionAnimation(index)}
          delay={index * 100}
          duration={600}
          className={sectionClasses}
        >
          <div className="w-full">{section.content}</div>
        </AnimatedSection>
      ))}

      {/* Espaçador final */}
      <div className={spacerClasses} />
    </div>
  )
}

export default Home
