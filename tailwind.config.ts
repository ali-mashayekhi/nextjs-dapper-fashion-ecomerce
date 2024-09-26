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
        primary: "#BA9B88",
        "primary-black": {
          800: "#141311",
          500: "#5B5A58",
          400: "#727170",
          300: "#8a8988",
          100: "#e8e7e7",
        },
        "primary-gray": {
          200: "#EDEEF2",
        },
        "custom-yellow": "#EAC612",
      },
      spacing: {
        "8xl": "100rem",
      },
    },
  },
  plugins: [],
};
export default config;
