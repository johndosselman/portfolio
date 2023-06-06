/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bitter: "var(--font-bitter)",
      },
      height: {
        screen: ["100vh", "100dvh"],
        "screen-60": ["60vh", "60dvh"],
      },
      width: {
        large: ["1000px"],
      },
      ringWidth: {
        3: ["3px"],
      },
    },
  },
  plugins: [],
};
