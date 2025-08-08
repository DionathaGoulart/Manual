import { useState, useCallback, useEffect } from 'react'
import { menuItems } from '@/data/menuItems'

interface UseSectionNavigationReturn {
  activeMainSection: string
  activeItem: string
  setActiveMainSection: (section: string) => void
  setActiveItem: (item: string) => void
  getMainSectionFromItem: (itemId: string) => string
  getFirstItemFromSection: (sectionId: string) => string | null
  navigateToSection: (sectionId: string) => void
  navigateToItem: (itemId: string) => void
}

/**
 * Hook personalizado para gerenciar navegação dinâmica entre seções
 */
export const useSectionNavigation = (): UseSectionNavigationReturn => {
  const [activeMainSection, setActiveMainSection] = useState('1')
  const [activeItem, setActiveItem] = useState('1.1')

  /**
   * Extrai a seção principal a partir de um ID de item (ex: '2.3' -> '2')
   */
  const getMainSectionFromItem = useCallback((itemId: string): string => {
    return itemId.split('.')[0]
  }, [])

  /**
   * Obtém o primeiro item de uma seção principal
   */
  const getFirstItemFromSection = useCallback(
    (sectionId: string): string | null => {
      const section = menuItems.find((item) => item.id === sectionId)

      if (!section) return null

      // Se não tem subitems, retorna o próprio ID
      if (!section.subitems || section.subitems.length === 0) {
        return section.id
      }

      // Retorna o primeiro subitem
      return section.subitems[0].id
    },
    []
  )

  /**
   * Navega para uma seção principal
   */
  const navigateToSection = useCallback(
    (sectionId: string) => {
      const firstItem = getFirstItemFromSection(sectionId)

      if (firstItem) {
        setActiveMainSection(sectionId)
        setActiveItem(firstItem)

        // Dispara evento customizado para componentes que precisam reagir
        window.dispatchEvent(
          new CustomEvent('sectionNavigated', {
            detail: {
              mainSection: sectionId,
              activeItem: firstItem,
              previousSection: activeMainSection
            }
          })
        )
      }
    },
    [getFirstItemFromSection, activeMainSection]
  )

  /**
   * Navega para um item específico
   */
  const navigateToItem = useCallback(
    (itemId: string) => {
      const mainSection = getMainSectionFromItem(itemId)

      // Se mudou de seção principal, atualiza
      if (mainSection !== activeMainSection) {
        setActiveMainSection(mainSection)
      }

      setActiveItem(itemId)

      // Dispara evento customizado
      window.dispatchEvent(
        new CustomEvent('itemNavigated', {
          detail: {
            itemId,
            mainSection,
            previousItem: activeItem
          }
        })
      )
    },
    [getMainSectionFromItem, activeMainSection, activeItem]
  )

  /**
   * Atualiza a seção principal quando o item ativo muda
   */
  useEffect(() => {
    const newMainSection = getMainSectionFromItem(activeItem)
    if (newMainSection !== activeMainSection) {
      setActiveMainSection(newMainSection)
    }
  }, [activeItem, activeMainSection, getMainSectionFromItem])

  return {
    activeMainSection,
    activeItem,
    setActiveMainSection,
    setActiveItem,
    getMainSectionFromItem,
    getFirstItemFromSection,
    navigateToSection,
    navigateToItem
  }
}
