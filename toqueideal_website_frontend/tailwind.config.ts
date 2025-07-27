import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais da marca Toque Ideal (azul e branco)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Azul principal da marca
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Cores secundárias (cinzas neutros)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Cores de destaque (dourado para produtos)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Dourado para produtos
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Branco puro da marca
        neutral: {
          50: '#ffffff', // Branco principal
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#ebebeb',
          500: '#e0e0e0',
          600: '#d5d5d5',
          700: '#b3b3b3',
          800: '#8a8a8a',
          900: '#6b6b6b',
          950: '#404040',
        },
        // Estados e feedback
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(59, 130, 246, 0.1)', // Sombra azul
        'product': '0 8px 32px rgba(245, 158, 11, 0.15)', // Sombra dourada para produtos
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', // Gradiente azul da marca
        'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Gradiente dourado para produtos
      },
    },
  },
  plugins: [],
}

export default config

