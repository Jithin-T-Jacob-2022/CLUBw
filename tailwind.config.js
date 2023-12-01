/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      10: "10px",
    },
    extend: {
      colors: {
        buttonBg: "rgba(255, 255, 255, 0.32)",
        progressBg: "rgba(217, 217, 217, 0.30)",
      },
      fontFamily: {
        "archivo-black": ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
