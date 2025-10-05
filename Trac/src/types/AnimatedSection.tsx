/**
 * Tipos de animação disponíveis para seções animadas.
 */
export type AnimationType =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scale'
  | 'slideUp'
  | 'slideDown'

/**
 * Propriedades do componente AnimatedSection.
 * @property children - Conteúdo a ser renderizado dentro da seção
 * @property animation - Tipo de animação a ser aplicada
 * @property delay - Atraso em milissegundos antes da animação
 * @property duration - Duração da animação em milissegundos
 * @property className - Classes CSS adicionais
 * @property id - Identificador único da seção
 */
export interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  id?: string
}

/**
 * Opções de configuração para o hook useScrollAnimation.
 * @property threshold - Limiar de visibilidade (0-1)
 * @property rootMargin - Margem do root para detecção
 * @property triggerOnce - Se deve disparar apenas uma vez
 * @property delay - Atraso antes de ativar a animação
 */
export interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

/**
 * Estado interno da animação.
 * @property isVisible - Se o elemento está visível na viewport
 * @property hasAnimated - Se a animação já foi executada
 */
export interface AnimationState {
  isVisible: boolean
  hasAnimated: boolean
}
