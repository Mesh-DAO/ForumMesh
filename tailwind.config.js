/** @type {import('tailwindcss').Config} */
import TailwindForms from '@tailwindcss/forms';

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
      colors: {
        "brand-blue": "#5271DB",
        "brand-red": "#FF4A48",
        "brand-bluedark": "#323B6E"
      }
    },
  },
  plugins: [
    TailwindForms,
  ],
};
