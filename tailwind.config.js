module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      hoverColor: "rgba(255,255,255, 0.5)",
      infoColor: "#141414",
      danger: "#e3342f",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
