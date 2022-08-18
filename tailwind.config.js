/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}", 
            "./pages/**/*.{html,js}", 
            "./components/**/*.{html,js}"
            ],
  theme: {
    extend: {
        colors: {
          'dark-blue': '#031D2C',
          'orange' : '#E2623F',
          'black': '#000000',
          'black-400': '#0000007d',
          'black-100': '#00000029'
        },
        'animation': {
            'text':'text 5s ease infinite',
        },
        'keyframes': {
            'text': {
                '0%, 100%': {
                  'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                  'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
        }
    },
  },
  plugins: [],
}
