export type AnimationType =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scale'
  | 'slideUp'
  | 'slideDown'

export interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  id?: string
}

export interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export interface AnimationState {
  isVisible: boolean
  hasAnimated: boolean
}
