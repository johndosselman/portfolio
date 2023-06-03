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
        "roboto": "var(--roboto)",
        "roboto-light": "var(--font-roboto-light)",
        "nunito": "var(--font-nunito)",
        "cousine": "var(--font-cousine)"
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      width: {
        large: ["1000px"],
      },
      
    },
  },
  plugins: [],
};
