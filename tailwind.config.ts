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
        dark: "#040D12",
        light: "#FFF6F6",
        gray: "#222831",
        pink: "#FF204E",
        darkpink: "#A0153E",
      },
    },
  },
  plugins: [],
};
export default config;
