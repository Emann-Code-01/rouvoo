/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {},
        screens: {
            sm: "640px",  // mobile → tablet
            md: "768px",  // tablet → small laptop
            lg: "1024px", // laptop
            xl: "1280px", // desktop
            "2xl": "1536px", // big screens/TV
        },
    },
    plugins: [],
}