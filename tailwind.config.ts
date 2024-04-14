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
      colors:{
        "orange":"#ffdb99",
        "orange-content":"#ffedcc"
      },
      width:{
        "linkbox":"27vw",
        "linkbox-accent":"3vw",
        "linkbox-margin":"3vw",
        "linkbox-sp":"60vw",
        "linkbox-accent-sp":"9vw",
        "linkbox-margin-sp":"6vw",
        "blog-box":"60vw",
        "blog-box-sp":"95vw",
        "blog-box-text":"100%",
      },
      margin:{
        "linkbox-margin":"2rem 3vw",
        "linkbox-margin-sp":"1rem 3vw",
        "breadcrumb-margin":"0 30vw 0",
        "breadcrumb-margin-sp":"0 5vw 0",
      }
    },
  },
  plugins: [],
};
export default config;
