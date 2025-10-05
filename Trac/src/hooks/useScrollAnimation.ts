import { useEffect, useRef, useState, useCallback } from 'react'

import {
  AnimationState,
  UseScrollAnimationOptions
} from '@/types/AnimatedSection'

// ================================
// CONSTANTES
// ================================

const DEFAULT_THRESHOLD = 0.1
const DEFAULT_ROOT_MARGIN = '0px 0px -50px 0px'
const DEFAULT_TRIGGER_ONCE = true
const DEFAULT_DELAY = 0

// ================================
// HOOK PRINCIPAL
// ================================

/**
 * Hook personalizado para animações baseadas em scroll.
 * Detecta quando um elemento entra na viewport e gerencia o estado da animação.
 *
 * @param options - Opções de configuração do hook
 * @param options.threshold - Limiar de visibilidade (0-1)
 * @param options.rootMargin - Margem do root para detecção
 * @param options.triggerOnce - Se deve disparar apenas uma vez
 * @param options.delay - Atraso antes de ativar a animação
 * @returns Objeto com ref, isVisible e hasAnimated
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = DEFAULT_THRESHOLD,
    rootMargin = DEFAULT_ROOT_MARGIN,
    triggerOnce = DEFAULT_TRIGGER_ONCE,
    delay = DEFAULT_DELAY
  } = options

  const elementRef = useRef<HTMLElement>(null)
  const [animationState, setAnimationState] = useState<AnimationState>({
    isVisible: false,
    hasAnimated: false
  })

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimationState((prev) => ({
              isVisible: true,
              hasAnimated: true
            }))
          }, delay)
        } else if (!triggerOnce) {
          setAnimationState((prev) => ({
            isVisible: false,
            hasAnimated: prev.hasAnimated
          }))
        }
      })
    },
    [delay, triggerOnce]
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [handleIntersection, threshold, rootMargin])

  return {
    ref: elementRef,
    isVisible: animationState.isVisible,
    hasAnimated: animationState.hasAnimated
  }
}
