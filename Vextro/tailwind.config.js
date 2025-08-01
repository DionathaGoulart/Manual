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
