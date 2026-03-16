import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        crema: {
          50: '#f5f8ff',
          100: '#e8eefc',
          500: '#3057d5',
          700: '#1e3eaa',
          900: '#11204d'
        }
      }
    }
  },
  plugins: []
};

export default config;
