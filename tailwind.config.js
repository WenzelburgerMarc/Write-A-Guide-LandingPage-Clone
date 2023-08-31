/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#20ba82",
          600: "#219d70",
        },
      },
    },
  },
  plugins: [],
};
