import IntroSection from '@/sections/Introduction'
import React, { useState, useEffect, useRef } from 'react'

const Home: React.FC = () => {
  const [activeItem, setActiveItem] = useState('1.1')
  const [isScrollingByClick, setIsScrollingByClick] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const sections = [
    {
      id: '1.1',
      content: <IntroSection />
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
    <>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el
          }}
          className={`px-2 sm:px-2 lg:px-2 mb-8 min-h-[70vh]
          }`}
        >
          <div className="max-w-3xl mx-auto w-full">{section.content}</div>
        </section>
      ))}
      <div className="h-[80vh]"></div> {/* Espaço extra para scroll */}
    </>
  )
}

export default Home
