import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: {
        primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-text-tertiary) / <alpha-value>)',
        subtle: 'rgb(var(--color-text-subtle) / <alpha-value>)',
        highlight: 'rgb(var(--color-text-highlight) / <alpha-value>)',
        accent: 'rgb(var(--color-text-accent) / <alpha-value>)',
        disabled: 'rgb(var(--color-text-disabled) / <alpha-value>)',
        pressed: 'rgb(var(--color-text-pressed) / <alpha-value>)',
        success: 'rgb(var(--color-text-success) / <alpha-value>)',
        warning: 'rgb(var(--color-text-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-text-danger) / <alpha-value>)',
      },
      surface: {
        'card-primary': 'rgb(var(--color-surface-card-primary) / <alpha-value>)',
        'card-accent': 'rgb(var(--color-surface-card-accent) / <alpha-value>)',
        'card-dark': 'rgb(var(--color-surface-card-dark) / <alpha-value>)',
        'background-primary': 'rgb(var(--color-surface-background-primary) / <alpha-value>)',
        'background-sheet': 'rgb(var(--color-surface-background-sheet) / <alpha-value>)',
        'background-secondary': 'rgb(var(--color-surface-background-secondary) / <alpha-value>)',
        'background-tertiary': 'rgb(var(--color-surface-background-tertiary) / <alpha-value>)',
    },
  },
    
    extend: {
      boxShadow: {
        'shadow-primary': '0 3.61px 21.66px -2.707px #1917160f, 0 3.61px 21.66px -10.83px #1917161f, 0 3.61px 9.025px -4.512px #1917161a, 0 2.707px 5.415px -2.707px #19171614, 0 1.805px 3.61px -1.805px #1917160f, 0 0.902px 0.902px -0.451px #1917160a;',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
