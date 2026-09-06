/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#123D34',
        greenDeep: '#0C2A24',
        paper: '#FAF8F4',
        paperWarm: '#F2EEE6',
        ink: '#141618',
        grey: '#8C8880',
        brass: '#B08D4F',
        line: '#DED9CF',
        lineDark: '#26473F',
      },
      fontFamily: {
        display: ['Spectral', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        eyebrow: '0.22em',
        lockup: '0.24em',
      },
      maxWidth: {
        content: '1200px',
        prose65: '65ch',
      },
    },
  },
  plugins: [],
}
