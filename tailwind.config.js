/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"DM Serif Text"', 'serif'],
        'poppins': ['Poppins', 'sans'],
        'numb':['DM Serif Display']
      },
      colors: {
        primary: '#060DBF',
        hemanth: '#62C941',
        pothu:'var(--Text_sn, #4D4F67)',
        bordcol:'var(--Border_light, #B3B3BE)',
        col1:'var(--neutral-n-40, #EBEBEE)',
        col2:'var(--Surface_pr, #F5F5F6)',
        col3:'var(--neutral-n-300, #999AA8)',
        col4:'var(--neutral-n-10, #FAFAFB)',
        col5:'var(--Text_pr, #1A1C3C)',
        col6:'var(--emerald-e-100, #D1FAE5)',
        col7:'var(--Text_success, #059669)',
        col8:'var(--primary-p-600, #050A99)',
        col9:'var(--Text_sn, #4D4F67)',
        col10:'var(--secondary-s-600, #4EA134)',
      },
    },
  },
  plugins: [
  ],
}

