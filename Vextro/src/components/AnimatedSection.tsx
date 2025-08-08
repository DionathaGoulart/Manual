import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import React, { forwardRef, useImperativeHandle } from 'react'

type AnimationType =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scale'
  | 'slideUp'
  | 'slideDown'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  id?: string
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  (
    {
      children,
      animation = 'fadeUp',
      delay = 0,
      duration = 600,
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

    const getAnimationClasses = () => {
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

      const currentAnimation = animationClasses[animation]
      const stateClass = isVisible
        ? currentAnimation.visible
        : currentAnimation.initial

      return `${baseClasses} ${stateClass}`
    }

    return (
      <section
        ref={ref}
        id={id}
        className={`${getAnimationClasses()} ${className}`}
      >
        {children}
      </section>
    )
  }
)

AnimatedSection.displayName = 'AnimatedSection'

export default AnimatedSection
