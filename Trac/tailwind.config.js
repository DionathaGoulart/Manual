/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: 'rgba(249, 249, 249, 1)',
      },
      fontFamily: {
        'orbit-gate': ['Orbit Gate', 'sans-serif'],
        'switzer': ['Switzer', 'sans-serif'],
        'lt-superior-regular': ['LTSuperior-Regular', 'serif'],
        'lt-superior-semibold': ['LTSuperior-SemiBold', 'serif'],
      },
      animation: {
        'fade-blur-in': 'fadeBlurIn 0.8s ease-out forwards',
        'slide-rotate-in': 'slideRotateIn 0.7s ease-out forwards',
        'elastic-in': 'elasticIn 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'flip-in': 'flipIn 0.8s ease-out forwards',
        'wave-in': 'waveIn 0.6s ease-out forwards',
        'zoom-bounce-in': 'zoomBounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'slide-diagonal-in': 'slideDiagonalIn 0.7s ease-out forwards',
        'typewriter': 'typewriter 1.2s steps(40, end) forwards',
      },
      keyframes: {
        fadeBlurIn: {
          'to': {
            opacity: '1',
            filter: 'blur(0px)',
          }
        },
        slideRotateIn: {
          'to': {
            opacity: '1',
            transform: 'translateY(0) rotate(0deg)',
          }
        },
        elasticIn: {
          'to': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          }
        },
        flipIn: {
          'to': {
            opacity: '1',
            transform: 'rotateY(0deg)',
          }
        },
        waveIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) rotateZ(-5deg)',
          },
          '50%': {
            transform: 'translateY(-5px) rotateZ(2deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) rotateZ(0deg)',
          }
        },
        zoomBounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '80%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          }
        },
        slideDiagonalIn: {
          'to': {
            opacity: '1',
            transform: 'translateX(0) translateY(0)',
          }
        },
        typewriter: {
          'to': {
            width: '100%',
          }
        }
      },
      animationDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      }
    },
  },
  plugins: [
    function ({ addUtilities, addComponents }) {
      const newUtilities = {
        '.font-dlig': {
          'font-feature-settings': "'dlig' on",
        },
        '.font-ss02': {
          'font-feature-settings': "'ss02' on",
        }
      }

      const newComponents = {
        '.animate-wait': {
          opacity: '0',
          'animation-fill-mode': 'forwards',
        },
        '.animate-fade-blur-in': {
          animation: 'fadeBlurIn 0.8s ease-out forwards',
          opacity: '0',
          filter: 'blur(4px)',
        },
        '.animate-slide-rotate-in': {
          animation: 'slideRotateIn 0.7s ease-out forwards',
          opacity: '0',
          transform: 'translateY(30px) rotate(2deg)',
        },
        '.animate-elastic-in': {
          animation: 'elasticIn 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
          opacity: '0',
          transform: 'scale(0.7) translateY(20px)',
        },
        '.animate-flip-in': {
          animation: 'flipIn 0.8s ease-out forwards',
          opacity: '0',
          transform: 'rotateY(-90deg)',
          perspective: '1000px',
        },
        '.animate-wave-in': {
          animation: 'waveIn 0.6s ease-out forwards',
          opacity: '0',
          transform: 'translateY(20px)',
        },
        '.animate-zoom-bounce-in': {
          animation: 'zoomBounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
          opacity: '0',
          transform: 'scale(0.3)',
        },
        '.animate-slide-diagonal-in': {
          animation: 'slideDiagonalIn 0.7s ease-out forwards',
          opacity: '0',
          transform: 'translateX(-30px) translateY(30px)',
        },
        '.hover-glow': {
          transition: 'all 0.3s ease',
          '&:hover': {
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
            transform: 'translateY(-2px)',
          }
        },
        '.hover-tilt': {
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
          }
        }
      }

      // Delays para animações
      const delays = {}
      for (let i = 0; i <= 800; i += 100) {
        delays[`.delay-${i}`] = {
          'animation-delay': `${i}ms`
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
      addComponents({ ...newComponents, ...delays })
    },
  ],
}
