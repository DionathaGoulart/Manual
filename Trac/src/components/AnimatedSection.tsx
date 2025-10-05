import React, { forwardRef, useImperativeHandle } from 'react'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { AnimatedSectionProps } from '@/types/AnimatedSection'

// ================================
// CONSTANTES
// ================================

const DEFAULT_ANIMATION = 'fadeUp'
const DEFAULT_DELAY = 0
const DEFAULT_DURATION = 600

// ================================
// FUNÇÕES AUXILIARES
// ================================

/**
 * Obtém as classes CSS de animação baseadas no tipo e estado.
 * @param animation - Tipo de animação
 * @param isVisible - Se o elemento está visível
 * @param duration - Duração da animação
 * @returns String com as classes CSS
 */
const getAnimationClasses = (
  animation: string,
  isVisible: boolean,
  duration: number
): string => {
  const baseClasses = `
    transition-all ease-out
    ${
      duration <= 300
        ? 'duration-300'
        : duration <= 500
          ? 'duration-500'
          : duration <= 700
            ? 'duration-700'
            : duration <= 1000
              ? 'duration-1000'
              : 'duration-1000'
    }
  `
    .trim()
    .replace(/\s+/g, ' ')

  const animationClasses = {
    fadeUp: {
      initial: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    fadeDown: {
      initial: 'opacity-0 -translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    fadeLeft: {
      initial: 'opacity-0 translate-x-8',
      visible: 'opacity-100 translate-x-0'
    },
    fadeRight: {
      initial: 'opacity-0 -translate-x-8',
      visible: 'opacity-100 translate-x-0'
    },
    scale: {
      initial: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100'
    },
    slideUp: {
      initial: 'translate-y-12 opacity-0',
      visible: 'translate-y-0 opacity-100'
    },
    slideDown: {
      initial: '-translate-y-12 opacity-0',
      visible: 'translate-y-0 opacity-100'
    }
  }

  const currentAnimation = animationClasses[animation as keyof typeof animationClasses]
  const stateClass = isVisible ? currentAnimation.visible : currentAnimation.initial

  return `${baseClasses} ${stateClass}`
}

// ================================
// COMPONENTE PRINCIPAL
// ================================

/**
 * Componente de seção animada que detecta quando entra na viewport.
 * @param children - Conteúdo a ser renderizado
 * @param animation - Tipo de animação a ser aplicada
 * @param delay - Atraso em milissegundos antes da animação
 * @param duration - Duração da animação em milissegundos
 * @param className - Classes CSS adicionais
 * @param id - Identificador único da seção
 */
const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  (
    {
      children,
      animation = DEFAULT_ANIMATION,
      delay = DEFAULT_DELAY,
      duration = DEFAULT_DURATION,
      className = '',
      id
    },
    forwardedRef
  ) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      delay
    })

    useImperativeHandle(forwardedRef, () => ref.current!, [])

    const animationClasses = getAnimationClasses(animation, isVisible, duration)

    return (
      <section
        ref={ref}
        id={id}
        className={`${animationClasses} ${className}`}
      >
        {children}
      </section>
    )
  }
)

AnimatedSection.displayName = 'AnimatedSection'

export default AnimatedSection
