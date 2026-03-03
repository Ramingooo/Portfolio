/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Zinc 950
        card: "#18181b", // Zinc 900
        primary: "#10b981", // Emerald 500 (1337 vibe)
        secondary: "#6366f1", // Indigo 500 (Academic vibe)
        accent: "#a1a1aa", // Zinc 400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
