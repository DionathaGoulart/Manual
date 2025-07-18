/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#FFFFFF',
        'text-muted': 'rgba(255, 255, 255, 0.6)',
        primary: '#D9FF85',
        secondary: '#191919',
        border: '#2C2C2C',
        'secondary-light': '#202020',
      },
      fontFamily: {
        'lt-superior': ['LT Superior', 'sans-serif'],
      },
      animation: {
        autoRun3d: "autoRun3d 20s linear infinite",
        animateBrightness: "animateBrightness 20s linear infinite",
      },
      keyframes: {
        autoRun3d: {
          from: { transform: "perspective(800px) rotateY(-360deg)" },
          to: { transform: "perspective(800px) rotateY(0deg)" },
        },
        animateBrightness: {
          "10%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(0.1)" },
          "90%": { filter: "brightness(1)" },
        },
      },
    }
  },
  plugins: [],
}
