/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "logo-blue": "#00a2e5",
        "text-blue": "#005baa",
        "corporate-blue": "#005baa",
        "dark-blue": "#005baa",
      },
      fontFamily: {
        corporate: ["Calibri", "Arial", "sans-serif"],
        sans: ["Calibri", "Arial", "system-ui", "-apple-system", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
};
