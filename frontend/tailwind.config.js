/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Mode forcé en Light par défaut, pas de switch sombre intempestif
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: '#eef9f2',
            100: '#d7f2e1',
            200: '#b2e5c6',
            300: '#81d2a4',
            400: '#4db87d',
            500: '#2a9e5f',
            600: '#02723c', // Vert Eware Référence
            700: '#025c31',
            800: '#034928',
            900: '#033c22',
            950: '#012113'
          },
          gold: {
            50: '#fff9eb',
            100: '#fef1c7',
            200: '#fee18a',
            300: '#fec947',
            400: '#ffa50d', // Or Solaire SolSizer Référence
            500: '#f58700',
            600: '#d96500',
            700: '#b44502',
            800: '#923608',
            900: '#782d0b',
            950: '#441402'
          }
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          card: '#ffffff'
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        card: '0 4px 20px -2px rgba(2, 114, 60, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        hover: '0 12px 30px -4px rgba(2, 114, 60, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
}
