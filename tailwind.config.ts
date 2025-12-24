import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This connects to the variable in layout.tsx
        sans: ["var(--font-inter)", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;