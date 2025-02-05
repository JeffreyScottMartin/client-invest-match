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
        display: ["var(--font-inter)", "sans"],
        body: ["var(--font-fira-sans)", "sans"],
      },
      colors: {
        mainBG: "#121212",
        contentBG: "#1E1E1E",
        primaryText: "#E0E0E0",
        secondaryText: "#A0A0A0",
        accentText: "#FFFFFF",
        vibrantAccent: "#1E90FF",
        mutedAccent: "#FF8C00",
        error: "#FF5C5C",
        success: "#28A745",
        seperator: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
