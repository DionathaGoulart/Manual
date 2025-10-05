import React from 'react'

import { ButtonProps } from '@/types/Uis'

// ================================
// CONSTANTES
// ================================

const DEFAULT_ICON = 'none'
const DEFAULT_VARIANT = 'primary'
const DEFAULT_SIZE = 'medium'
const DEFAULT_DISABLED = false
const DEFAULT_CLASSNAME = ''

// ================================
// COMPONENTE PRINCIPAL
// ================================

/**
 * Componente de botão reutilizável com suporte a ícones e variantes.
 * @param text - Texto exibido no botão
 * @param onClick - Callback executado ao clicar no botão
 * @param icon - Ícone a ser exibido no botão
 * @param variant - Variante visual do botão
 * @param size - Tamanho do botão
 * @param disabled - Se o botão está desabilitado
 * @param className - Classes CSS adicionais
 */
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon = DEFAULT_ICON,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  disabled = DEFAULT_DISABLED,
  className = DEFAULT_CLASSNAME
}) => {
  // Ícones disponíveis
  const icons = {
    download: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3V16M12 16L16 12M12 16L8 12M4 21H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    upload: (
      <svg width="20" height="20" viewBox="0 0 91 91" fill="none">
        <path
          d="M61.216 70.335C62.866 70.335 64.616 69.035 65.166 67.485L73.866 40.685C74.366 39.135 73.466 37.835 71.816 37.885H69.916C68.266 37.885 66.516 39.235 65.966 40.785L59.716 59.985C59.216 61.535 57.416 62.835 55.766 62.835H52.366C50.716 62.835 49.366 61.485 49.366 59.835V3.33496C49.366 1.68496 48.016 0.334961 46.366 0.334961H44.866C43.216 0.334961 41.866 1.68496 41.866 3.33496V59.835C41.866 61.485 40.516 62.835 38.866 62.835H35.566C33.916 62.835 32.166 61.535 31.666 59.985L25.566 40.685C25.066 39.135 23.316 37.835 21.666 37.835H19.566C17.916 37.835 16.966 39.135 17.516 40.685L26.216 67.485C26.716 69.035 28.516 70.335 30.166 70.335H61.266H61.216Z"
          fill="currentColor"
        />
        <path
          d="M86.166 65.335C84.516 65.335 83.166 66.685 83.166 68.335V79.835C83.166 81.485 81.816 82.835 80.166 82.835H11.166C9.51602 82.835 8.16602 81.485 8.16602 79.835V68.335C8.16602 66.685 6.81602 65.335 5.16602 65.335H3.66602C2.01602 65.335 0.666016 66.685 0.666016 68.335V87.335C0.666016 88.985 2.01602 90.335 3.66602 90.335H87.666C89.316 90.335 90.666 88.985 90.666 87.335V68.335C90.666 66.685 89.316 65.335 87.666 65.335H86.166Z"
          fill="currentColor"
        />
      </svg>
    ),
    none: null
  }

  // Variantes de cor
  const variants = {
    primary:
      'bg-[#FF5733] hover:bg-orange-600 focus:ring-orange-500/50 text-gray-900',
    secondary:
      'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500/50 text-white',
    success:
      'bg-green-600 hover:bg-green-700 focus:ring-green-500/50 text-white',
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500/50 text-white'
  }

  // Tamanhos
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-12 py-6 text-lg'
  }

  // Classes base do botão
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-xl shadow-lg
    focus:outline-none focus:ring-4
    transform hover:scale-105 transition-all duration-200 ease-in-out
    gap-3
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon !== 'none' && icons[icon]}
      {text}
    </button>
  )
}

export default Button
