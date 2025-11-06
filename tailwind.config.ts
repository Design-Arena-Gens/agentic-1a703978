import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#e8f3ff",
          200: "#d0e5ff",
          300: "#a5ccff",
          400: "#6da9ff",
          500: "#3f82ff",
          600: "#2a60e6",
          700: "#1e46b4",
          800: "#1c3a8c",
          900: "#1b3170"
        },
        sand: {
          50: "#fdf8f3",
          100: "#f8eadd",
          200: "#f0d3b8",
          300: "#e6b389",
          400: "#d68d56",
          500: "#c36e2e",
          600: "#aa551f",
          700: "#87421b",
          800: "#6a351c",
          900: "#572d1a"
        }
      },
      fontFamily: {
        display: ["var(--font-montserrat)"],
        body: ["var(--font-inter)"]
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at top right, rgba(63,130,255,0.35), transparent 55%), radial-gradient(circle at bottom left, rgba(195,110,46,0.4), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
