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
        primary: {
          primary50: "#F8ECE7",
          primary100: "#E9C4B4",
          primary200: "#DEA890",
          primary300: "#CF805E",
          primary400: "#C5673E",
          primary500: "#B7410E",
          primary600: "#A73B0D",
          primary700: "#822E0A",
          primary800: "#652408",
          primary900: "#4D1B06",
        },
        seconary: {
          seconary50: "#EBEDED",
          seconary100: "#C1C6C8",
          seconary200: "#A3AAAE",
          seconary300: "#798489",
          seconary400: "#5F6C72",
          seconary500: "#37474F",
          seconary600: "#324148",
          seconary700: "#273238",
          seconary800: "#1E272B",
          seconary900: "#171E21",
        },
        lineHeight: {
          custom1: "31.99px",
        },
      },
      fontFamily: {
        playfair: "[var(--font-playfair)]",
        playfair_Display: "[var(--font-playfair_Display)]",
      },
    },
  },
  plugins: [],
};
export default config;
