import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        HelveticaNeueThin: ['var(--font-HelveticaNeueThin)'],  
        HelveticaNeue: ['var(--font-HelveticaNeue)'], 
        HelveticaNeueMedium: ['var(--font-HelveticaNeueMedium)'],
        PublicSansBlack: ['var(--font-PublicSansBlack)'],
      },
      colors: {
        'custom-gray': 'rgba(117, 117, 117, 0.05)', 
        'custom-black': 'rgba(0, 0, 0, 0.65)', 
        'custom-black-10': 'rgba(0, 0, 0, 0.10)', 
        'custom-white-10': 'rgba(255, 255, 255, 0.10)',
      },

    },
  },
  plugins: [],
};
export default config;
