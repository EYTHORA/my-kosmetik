module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kleia: {
          primary: "#cd6582",
          secondary: "#d27b9a",
          bs: "#d690b3",
          light1: "#d9a4cc",
          light2: "#dab9e6",
          page: "#FFDDCC",
        },
      },
    },
  },
  plugins: [],
};
