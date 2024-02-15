/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xl': '1440px',
        // => @media (max-width: 1535px) { ... }
  
        'lg': '1024px',
        // => @media (max-width: 1023px) { ... }
  
        'md': '768px',
        // => @media (max-width: 767px) { ... }
        'esmd': '600px',
        // => @media (max-width: 767px) { ... }
        'sm':'425px',
        // => @media (max-width: 767px) { ... }
        'exsm':'320px',
        // => @media (max-width: 767px) { ... }
      },
      keyframes: {
        fadeIn :{
          "0%":{opacity:"0%", display:"none", transform:"scale(0)"},
          "50%":{opacity:"0%", display:"none", transform:"scale(0)"},
          "100%":{opacity: "100%", transform:"scale(1)", display:"block"}
        },
        fadeOut :{
          "0%":{opacity: "100%", transform:"scale(1)"},
          "100%":{opacity:"0%", display:"none",transform:"scale(0)"}
        }
      },
      boxShadow: {
        "inputShadow" : "2px 5px 8px #888888"
      }
    },
  },
  plugins: [],
}

