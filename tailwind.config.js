/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "mb-pattern": "url('/src/assets/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
