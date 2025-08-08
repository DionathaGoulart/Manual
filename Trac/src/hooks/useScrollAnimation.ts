import {
  AnimationState,
  UseScrollAnimationOptions
} from '@/types/AnimatedSection'
import { useEffect, useRef, useState, useCallback } from 'react'

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
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
