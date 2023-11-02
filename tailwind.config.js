/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                24: 'repeat(24, minmax(0, 1fr))',
            },
            gridTemplateRows: {
                24: 'repeat(24, minmax(0, 1fr))',
            },
            fontFamily: {
                'noto-sans': ['FontName', 'fallbackFontName'],
                caveat: ['Caveat', 'cursive'],
            },
            width: {
                500: '31.25rem',
                1100: '68.75rem',
            },
            height: {
                500: '31.25rem',
                1100: '68.75rem',
            },
            spacing: {
                '92px': '92px',
                '93px': '93px',
            },
        },
    },
    plugins: [],
};
