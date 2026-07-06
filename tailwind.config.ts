import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050914",
          900: "#08111f",
          850: "#0b1627",
          800: "#101d32",
        },
        accent: {
          500: "#3b82f6",
          400: "#60a5fa",
          300: "#93c5fd",
        },
        silver: {
          500: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.24)",
        card: "0 24px 80px rgba(0, 0, 0, 0.36)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
