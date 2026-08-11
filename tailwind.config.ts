import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                verde: '#0A3D2B',
                'verde-mid': '#1A5C40',
                'verde-claro': '#E8F5E2',
                amarillo: '#F7C52B',
                'amarillo-hover': '#E5B520',
                blanco: '#FFFFFF',
                'gris-100': '#F5F5F5',
                'gris-200': '#E8E8E8',
                'gris-400': '#9CA3AF',
                'gris-700': '#374151',
                negro: '#1A1A1A',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            animation: {
                'pulse-green': 'pulse-green 2s infinite',
                'blink-dot': 'blink-dot 2s infinite',
            },
            keyframes: {
                'pulse-green': {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
                    '50%': { boxShadow: '0 0 0 8px rgba(37, 211, 102, 0)' },
                },
                'blink-dot': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.3' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
