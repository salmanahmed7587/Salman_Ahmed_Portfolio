/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#06b6d4',
                    hover: '#0891b2',
                },
                dark: {
                    DEFAULT: '#020617',
                    secondary: '#0f172a',
                    tertiary: '#1e293b',
                },
                accent: {
                    cyan: '#06b6d4',
                    blue: '#3b82f6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
