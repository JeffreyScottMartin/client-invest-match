/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)", "Helvetica", "sans"],
        body: ["var(--font-fira-sans)", "Helvetica", "sans"],
        equivolition: ["Equivolition", "Helvetica", "sans"],
      },
      colors: {
        white: "#FFFFFF",
        lightGray: "#757575",
        darkGray: "#515151",
        brandLightBlue: "#3399ff",
        brandMidBlue: "#2667ff",
        brandDarkBlue: "#0353A4",
        error: "#FF5C5C",
        success: "#28A745",
      },
    },
  },
  plugins: [],
};
