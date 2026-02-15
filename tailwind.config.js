/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)", // Dynamic Background
                surface: "var(--color-surface)", // Dynamic Surface
                text: "var(--color-text)", // Dynamic Text
                primary: "var(--color-primary)", // Dynamic Primary
                secondary: "var(--color-surface)",
                active: "var(--color-primary)",
                hover: "var(--color-primary)",
                dark: "#E7E8D3", // Legacy fallback
                cyan: {
                    400: "#FFA54D", // Override cyan utilities with orange/primary
                    500: "#F99030",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
                display: ['"Pixelify Sans"', 'sans-serif'], // Main Headings
                tech: ['"Chakra Petch"', 'sans-serif'], // Technical/Subtitles
                pixel: ['"Pixelify Sans"', 'monospace'],
            },
        },
    },
    plugins: [],
}
