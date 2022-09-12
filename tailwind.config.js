module.exports = {
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme: {
        screens: {
            xs: '480px',
            sm: '800px',
            md: '1120px',
            lg: '1440px',
            xl: '1760px',
            '2xl': '2080px',
            '3xl': '2400px',
        },
        fontSize: {
            xxs: ['.5rem', '.5rem'],
            xs: ['.75rem', '1rem'],
            base: ['1rem', '1.5rem'],
            lg: ['1.25rem', '1.5rem'],
            xl: ['1.5rem', '2rem'],
            '2xl': ['1.75rem', '2rem'],
            '3xl': ['2rem', '2.5rem'],
            '4xl': ['2.25rem', '2.5rem'],
            '5xl': ['2.5rem', '3rem'],
            '6xl': ['2.75rem', '3rem'],
            '7xl': ['3rem', '3.5rem'],
            '8xl': ['3.25rem', '3.5rem'],
            '9xl': ['3.5rem', '4rem'],
        }
    }
};