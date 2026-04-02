import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
      "spin-slow": "spin 6s linear infinite",
    },
      backgroundImage: {
  
      },
      colors: {
   color1:"#066168",
   color2:"#FFAA0D",
   color3:"#85D200",
   color4:"#ffce5b",
   color5:"#2B3944"
      },
    },
  },
  plugins: [],
};

export default config;
