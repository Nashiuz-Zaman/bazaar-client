import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "360px",
        xs: "480px",
        "2md": "850px",
        "3xl": "1700px",
        "4xl": "1920px",
      },
      boxShadow: {
        large: "0 10px 60px -10px rgba(0,0,0,0.25)",
        medium: "0 5px 40px -5px rgba(0,0,0,0.25)",
        small: "0 7px 20px -10px rgba(0,0,0,0.15)",
      },
      colors: {
        primary: "#4CAF50",
        accent: "#A8E6A3",
        primaryText: "#4E4E4E",
        background: "#F1F1F1",
        highlight: "#FFEB3B",
        lightBlack: "#111"
      },
    },
  },
  plugins: [],
};
export default config;
