/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dragonforge-nexus": {
          100: "#70AE20",
          150: "#659E1D",
          200: "#5C8F1A",
          250: "#548218",
          300: "#4C7716",
          350: "#456C14",
          DEFAULT: "#3F6212",
          400: "#395810",
          450: "#334F0F",
          500: "#2E470D",
          550: "#29400C",
          600: "#253A0B",
          650: "#21340A",
        },
        "dragonforge-media": {
          100: "#829AEA",
          150: "#6583E5",
          200: "#4C6FE0",
          250: "#355CDC",
          300: "#244DD4",
          350: "#2146C1",
          DEFAULT: "#1E40AF",
          400: "#1B3A9D",
          450: "#18348E",
          500: "#162F80",
          550: "#142A73",
          600: "#122667",
          650: "#10225D",
        },
        "dragonforge-code": {
          100: "#B592EB",
          150: "#A174E6",
          200: "#8E5AE1",
          250: "#7E42DD",
          300: "#6F2BD9",
          350: "#6424C8",
          DEFAULT: "#5B21B6",
          400: "#521EA4",
          450: "#4A1B93",
          500: "#421885",
          550: "#3C1677",
          600: "#36136B",
          650: "#301261",
        },
        "dragonforge-news": {
          100: "#0BA87C",
          150: "#0A9971",
          200: "#098B66",
          250: "#087E5D",
          300: "#077355",
          350: "#07694D",
          DEFAULT: "#065F46",
          400: "#05563F",
          450: "#054D39",
          500: "#044533",
          550: "#043E2E",
          600: "#043829",
          650: "#033225",
        },
        "dragonforge-network": {
          100: "#EB7730",
          150: "#E96819",
          200: "#D65E14",
          250: "#C25513",
          300: "#B14D11",
          350: "#A1460F",
          DEFAULT: "#92400E",
          400: "#833A0D",
          450: "#76340B",
          500: "#6A2F0A",
          550: "#602A09",
          600: "#562608",
          650: "#4E2207",
        },
        "dragonforge-gaming": {
          100: "#D44ADF",
          150: "#CF33DB",
          200: "#C425D1",
          250: "#B221BE",
          300: "#A21EAD",
          350: "#931B9D",
          DEFAULT: "#86198F",
          400: "#791681",
          450: "#6D1474",
          500: "#621268",
          550: "#58105E",
          600: "#4F0F54",
          650: "#470D4C",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
