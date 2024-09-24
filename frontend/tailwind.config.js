/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {

    extend: {},
    colors:{
      'primary': '#047481',
      'seondary': '#66b5a3',
      'tetiary': '#f2faf9',
    }

  },

  plugins: [
    require('flowbite/plugin'),
  ],

}
