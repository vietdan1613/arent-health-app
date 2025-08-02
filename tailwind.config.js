module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF', // ホワイト: backgrounds or text on dark bg
        black: '#000000', // ブラック: darkest background

        light: '#F5F5F5', // Optional light background

        // プライマリーカラー (Primary)
        primary: {
          300: '#FFCC21', // e.g., button gradients
          400: '#FF963C', // icons, logos
          500: '#EA6C00', // notification badges
        },

        // ダークカラー (Dark)
        dark: {
          500: '#414141', // header/footer text
          600: '#2E2E2E', // text on light backgrounds
        },

        // グレー (Gray)
        gray: {
          400: '#777777', // borders, lines
        },

        // セカンダリーカラー (Secondary)
        secondary: {
          300: '#8FE9D0', // e.g., for charts
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
      },
    },
  },
  plugins: [],
}
