import React, { useState, useEffect, useRef } from 'react'
import {
  About,
  Blog,
  Contact,
  Hero,
  Portfolio,
  Pricing,
  Services,
  Team,
  Testimonials
} from '@/sections'

const Home: React.FC = () => {
  const [activeItem, setActiveItem] = useState('1.1')
  const [isScrollingByClick, setIsScrollingByClick] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const sections = [
    {
      id: '1.1',
      content: <Hero />
    },
    {
      id: '1.2', // Adicionando IDs que correspondem ao seu menuItems
      content: <About />
    },
    {
      id: '1.3',
      content: <Services />
    },
    {
      id: '2.1',
      content: <Portfolio />
    },
    {
      id: '2.2',
      content: <Team />
    },
    {
      id: '2.3',
      content: <Testimonials />
    },
    {
      id: '3.1',
      content: <Pricing />
    },
    {
      id: '3.2',
      content: <Blog />
    },
    {
      id: '3.3',
      content: <Contact />
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
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el
          }}
          className="px-6 sm:px-6 lg:px-8 mb-8 min-h-[70vh]"
        >
          <div className="max-w-7xl mx-auto w-full">{section.content}</div>
        </section>
      ))}
      <div className="h-[80vh]"></div> {/* Espaço extra para scroll */}
    </>
  )
}

export default Home
