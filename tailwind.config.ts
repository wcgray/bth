import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        modalEnter: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          '50%': { opacity: '0.5', transform: 'scale(0.97) translateY(5px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        'modal-enter': 'modalEnter 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
