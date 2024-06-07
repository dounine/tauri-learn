/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,vue}'],
    theme: {
        extend: {
            backgroundColor: {
                'slate': '#131313',
            },
            colors: {},
        }
    },
    darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows edit about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root",
    darkMode: 'class',
    // prefix: 'tw-',
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: '#3277F6'
                },
                dark: {
                    "color-scheme": "dark",
                    primary: '#3277F6',
                    "secondary": "#373737",
                    "accent": "#373737",
                    "base-100": "#000000",
                    "base-200": "#141414",
                    "base-300": "#262626",
                    "base-content": "#d6d6d6",
                    "neutral": "#373737",
                    "info": "#0000ff",
                    "success": "#008000",
                    "warning": "#ffff00",
                    "error": "#ff0000",
                }
            }
        ]
    },
}

