import { useState, useCallback, useEffect } from 'react'

import { menuItems } from '@/data/menuItems'
import { UseSectionNavigationReturn } from '@/types/Sidebar'

// ================================
// CONSTANTES
// ================================

const DEFAULT_MAIN_SECTION = '1'
const DEFAULT_ACTIVE_ITEM = '1.1'

// ================================
// HOOK PRINCIPAL
// ================================

/**
 * Hook personalizado para gerenciar navegação dinâmica entre seções.
 * Controla o estado da seção principal ativa e do item ativo, além de
 * fornecer funções utilitárias para navegação.
 *
 * @returns Objeto com estado e funções de navegação
 */
export const useSectionNavigation = (): UseSectionNavigationReturn => {
  const [activeMainSection, setActiveMainSection] = useState(DEFAULT_MAIN_SECTION)
  const [activeItem, setActiveItem] = useState(DEFAULT_ACTIVE_ITEM)

  // ================================
  // FUNÇÕES UTILITÁRIAS
  // ================================

  /**
   * Extrai a seção principal a partir de um ID de item (ex: '2.3' -> '2').
   * @param itemId - ID do item no formato 'seção.subitem'
   * @returns ID da seção principal
   */
  const getMainSectionFromItem = useCallback((itemId: string): string => {
    return itemId.split('.')[0]
  }, [])

  /**
   * Obtém o primeiro item de uma seção principal.
   * @param sectionId - ID da seção principal
   * @returns ID do primeiro item ou null se não encontrado
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

  // ================================
  // FUNÇÕES DE NAVEGAÇÃO
  // ================================

  /**
   * Navega para uma seção principal.
   * @param sectionId - ID da seção principal
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
   * Navega para um item específico.
   * @param itemId - ID do item de destino
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

  // ================================
  // EFFECTS
  // ================================

  /**
   * Atualiza a seção principal quando o item ativo muda.
   */
  useEffect(() => {
    const newMainSection = getMainSectionFromItem(activeItem)
    if (newMainSection !== activeMainSection) {
      setActiveMainSection(newMainSection)
    }
  }, [activeItem, activeMainSection, getMainSectionFromItem])

  // ================================
  // RETORNO
  // ================================

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
