/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",    // if you use the app directory
        "./pages/**/*.{js,ts,jsx,tsx}",  // if you use the pages directory
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
