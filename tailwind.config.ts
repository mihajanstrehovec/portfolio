import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        img: '0 0 7 #000'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        aleo: ['Aleo', 'sans']
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        titles: 'var(--color-titles)',
        background: '#181818',
        experiences: '#297476',
        'experiences-dark': '#194647',
        education: '#5E2B5F',
        'education-dark': '#351D35',
        projects: '#2C5E40',
        'projects-dark': '#213D2C',
        skills: '#A83737',
        'skills-dark': '#5F2727',
        contact: '#A87B37',
        'contact-dark': '#69502A',
        subtleText: '#747474'
      },
      spacing: {

      },
      boxShadow: {
        'headshot': '0 0 8px 0px #2e5d5e'
      }
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],
};
export default config;
