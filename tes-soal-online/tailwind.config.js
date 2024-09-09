/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3887a7",
        secondary: "#c3e8e7",
        'primary-dark': '#0275a7', // Tambahkan warna gelap jika diperlukan
      },
      container: {
        padding: {
          center: true,
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}
