/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: "#1e1e1e",
        surface: "#252526",
        surfaceAlt: "#2d2d2d",
        border: "#3c3c3c",

        textHeading: "#ffffff",
        textSecondary: "#d4d4d4",
        textMuted: "#808080",

        accent: "#4ec9b0",
      },
    },
  },
  plugins: [],
};
