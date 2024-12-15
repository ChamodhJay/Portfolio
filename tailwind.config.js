/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Custom primary color
        secondary: "#2d3748",
        highlight: "#fbbf24", // Add highlight color for text
        accent: "#facc15", // Add accent color for text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font family
      },
      keyframes: {
        pulseColor: {
          "0%": { color: "#fbbf24" }, // Initial color (yellow)
          "50%": { color: "#facc15" }, // Intermediate color
          "100%": { color: "#fbbf24" }, // Final color
        },
        scaleUp: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.1)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        typewriter: {
          "0%": { width: "0", opacity: "1" },
          "100%": { width: "100%", opacity: "1" },
        },
        blinkCursor: {
          "0%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        pulseColor: "pulseColor 2s infinite", // Color pulse animation
        scaleUp: "scaleUp 1s infinite alternate", // Scaling up animation
        fadeIn: "fadeIn 1.5s ease-in-out", // Fade-in animation
        slideInLeft: "slideInLeft 1.5s ease-in-out", // Slide-in animation
        typewriter: "typewriter 4s steps(40, end) 1s 1 normal both", // Typewriter animation
        blinkCursor: "blinkCursor 0.75s step-end infinite", // Cursor blink animation
      },
    },
  },
  plugins: [],
};
