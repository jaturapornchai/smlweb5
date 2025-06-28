/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                'thai': ['Noto Sans Thai', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    'xs': '1rem',
                    'sm': '1.5rem',
                    'md': '2rem',
                    'lg': '2rem',
                    'xl': '2rem',
                    '2xl': '2rem',
                },
                screens: {
                    'xs': '475px',
                    'sm': '640px',
                    'md': '768px',
                    'lg': '1024px',
                    'xl': '1280px',
                    '2xl': '1400px',
                }
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            fontSize: {
                'xxs': '0.625rem',
            },
            lineHeight: {
                'extra-loose': '2.5',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            }
        },
    },
    plugins: [],
}
