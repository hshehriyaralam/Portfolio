 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lightHover: "#fcf4ff",
      darkHover : '#2a004a',
      darkTheme : '#11001F'
    },
    fontFamily : {
      Outfit : ["Outfit", "sans-serif"],
      Ovo : ["Ovo", "serif"]
    }
  },
  plugins: [],
}
