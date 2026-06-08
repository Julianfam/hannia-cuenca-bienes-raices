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
        brand: {
          50: "#faf6f1",
          100: "#f3ebe0",
          200: "#e6d4bc",
          300: "#d6b894",
          400: "#c49a6c",
          500: "#b8844f",
          600: "#a66f43",
          700: "#8a5839",
          800: "#704833",
          900: "#5c3c2c",
          950: "#311f16",
        },
        ink: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#1a1a1a",
          950: "#0f0f0f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(26, 26, 26, 0.08)",
        card: "0 8px 32px -8px rgba(26, 26, 26, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;