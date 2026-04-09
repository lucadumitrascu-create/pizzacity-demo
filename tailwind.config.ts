import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "#C8362C",
        cream: "#FFF8EC",
        charcoal: "#1F1B18",
        gold: "#E8A33D",
        green: "#4A7C3A",
        texto: "#2A2420",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        inter: ["var(--font-inter)"],
        caveat: ["var(--font-caveat)"],
      },
    },
  },
  plugins: [],
};
export default config;
