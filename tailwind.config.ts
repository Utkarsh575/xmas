import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        game: ['"Press Start 2P"', "swap"],
      },
      backgroundImage: {
        snow: "url('/bg.png')",
        dialog: "url('/dialog.png",
      },
    },
  },
  plugins: [],
};
export default config;
