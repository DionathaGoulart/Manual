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
