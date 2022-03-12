module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blibli: "#0095da",
        graybli: "#858585",
        cintabumi: "#E5FFEB",
      },
    },
  },
  plugins: [],
};
