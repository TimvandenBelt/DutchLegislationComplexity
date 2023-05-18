const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/js/**/*.ts",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
                serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
