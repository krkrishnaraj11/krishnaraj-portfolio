import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0c0c0c',
          elevated: '#111111',
          hover: '#1a1a1a',
          subtle: '#0f0f0f',
        },
        text: {
          primary: '#f5f5f0',
          muted: '#999999',
          dim: '#555555',
          disabled: '#333333',
        },
        accent: {
          blue: '#3d5afe',
          pink: '#ff2d7b',
          lime: '#b8ff57',
          orange: '#ff6d3f',
          cyan: '#00e5ff',
        },
        border: {
          DEFAULT: '#1a1a1a',
          hover: '#333333',
          accent: 'rgba(184, 255, 87, 0.2)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
