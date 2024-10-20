/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "product-sans": ['Product Sans', "sans-serif"],
      },
      height:{
        'custom-h': 'calc(100vh - 200px)',
      },
      backgroundImage: {
        "gemini-gradient":
          "linear-gradient(74deg, #4285f4 0%, #9b72cb 9%, #d96570 20%, #d96570 24%, #9b72cb 35%, #4285f4 44%, #9b72cb 50%, #d96570 56%, #fff 75%, #fff 100%)",
      },
    },
  },
  plugins: [],
};
