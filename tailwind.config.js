/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
        rave: "Rave",
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
