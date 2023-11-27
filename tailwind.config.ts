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
        grayLight: "#273345",
        grayDefault: "#1F2937",
        grayDark: "#161F2B",
        greenLight: "#00E096",
        greenDefault: "#10B981",
        greenDark: "#009463",
        blueLight: "#617AFF",
        blueDefault: "#445FEF",
        blueDark: "#3145B0",
        yellowLight: "#FFAC29",
        yellowDefault: "#FF9D02",
        yellowDark: "#D98502",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
