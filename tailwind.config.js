/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'customBg': '#011627',
        'customPurple': '#5565E8',
        'customPink': '#C98BDF',
        'customOrange': '#FEA55F',
        'customGrey': '#607B96',
        'customGreen': '#43D9AD',
        'customLine': '#1E2D3D',
        'customWhite': '#E5E9F0',
        'customCode': '#011221',
      },
      fontSize: {
        '62px': '3.88rem'
      },
      margin: {
        '27px': '1.69rem',
        '18px': '1.100rem',
      },
      padding: {
        '27px': '1.69rem',
        '18px': '1.100rem',
      },
      fontFamily: {
        'firaCode': ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}

