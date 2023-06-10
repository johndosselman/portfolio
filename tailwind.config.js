/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        libreFranklin: "var(--libreFranklin)",
        work: "var(--work)",
      },
      colors: {
        perrywinkle: "#4e6bfc",
        mint: "#5ae6a9",
        brick: "#fc6435",
      },
      transitionProperty: {
        "nav-color": ["background-color, border-color"],
        width: ["width"],
      },
      height: {
        screen: ["100vh", "100dvh"],
        "screen-60": ["60vh", "60dvh"],
        "1/20": ["5%"],
        "9/10": ["90%"],
      },
      width: {
        large: ["1000px"],
      },
      maxWidth: {
        90: ["90%"],
        80: ["80%"],
        70: ["70%"],
        60: ["60%"],
        65: ["65%"],
      },
      ringWidth: {
        3: ["3px"],
      },
    },
  },
  plugins: [],
};
