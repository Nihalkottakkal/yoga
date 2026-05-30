/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Changed from warm cream to subtle pastel blue
        ivory: "#f0f5ff",
        sand: "#e0efff",
        darksand: "#CFE7FF",
        sage: "#a3b19b",
        sageDark: "#7a8773",
        charcoal: "#2a2a2a",
        earth: "#5c4a3d",
        gold: "#d4af37",
        goldLight: "#ebd791",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
