/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sm: "var(--shadow)",
        lg: "var(--shadow-lg)",
      },
      colors: {
        blue: "var(--blue-color)",
        body: "var(--body-color)",
        heading: "var(--heading-color)",
        line: "var(--line-color)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
