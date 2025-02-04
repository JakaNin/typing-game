import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "white-blur": "0 0 10px rgba(255, 255, 255, 1)",
        "black-blur": "0px 0px 10px 0px rgba(7, 5, 2, 0.1)",
      },
      spacing: {
        header: "3rem",
        footer: "2rem",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      lineHeight: {
        "more-relaxed": "1.8",
      },
      keyframes: {
        "bounce-short": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
      },
      animation: {
        "bounce-short": "bounce-short 0.6s ease-in-out",
      },
      colors: {
        ap: {
          black: {
            DEFAULT: "#121315",
            300: "#070502",
            500: "#121315",
          },
          gray: {
            DEFAULT: "#9f9f9f",
            0: "#fff",
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#efefef",
            300: "#e1e1e1",
            400: "#bebebe",
            500: "#9f9f9f", // disable
            600: "#9f9f9f", // placeholder
            700: "#626262", // text
            800: "#434343", // text
            900: "#222", // text
            1000: "#000" // text
          },
          blueGray: {
            DEFAULT: "#aab6c4",
            100: "#f5f7fB",
            200: "#edeff4",
            300: "#d8dfe7",
            400: "#c4cfda",
            500: "#aab6c4", // disable
            600: "#8a91a3", // placeholder
            700: "#6a707f", // text
            800: "#4e515c", // text
            900: "#353940", // text
            1000: "#121315" // text
          },
          blue: {
            DEFAULT: "#95d4e5",
            100: "#f0f6fd",
            200: "#e2eef9",
            300: "#c7e2f2",
            400: "#acd7ea",
            500: "#95d4e5", // disable
            600: "#81cce1", // placeholder
            700: "#47afd0", // text
            800: "#2183cb", // text
            900: "#2a66a8", // text
            1000: "#1a4fa1" // text
          },
          red: {
            DEFAULT: "#f89c93",
            100: "#fcf0f0",
            200: "#ffe5e2",
            300: "#ffd4ce",
            400: "#ffbfb6",
            500: "#f89c93", // disable
            600: "#ec7864", // placeholder
            700: "#ea4e42", // text
            800: "#e23030", // text
            900: "#cc3333", // text
            1000: "#b72929" // text
          },
          green: {
            DEFAULT: "#71b599",
            100: "#e7f2ed",
            200: "#cceadc",
            300: "#a9d8c3",
            400: "#8bc6ab",
            500: "#71b599", // disable
            600: "#59a88a", // placeholder
            700: "#3e8977", // text
            800: "#217f67", // text
            900: "#156b53", // text
            1000: "#0e5942" // text
          },
          yellow: {
            DEFAULT: "#f4df89",
            100: "#fffae1",
            200: "#fcf5d9",
            300: "#fcf0b6",
            400: "#f9eaa0",
            500: "#f4df89", // disable
            600: "#e8cd58", // placeholder
            700: "#e2c139", // text
            800: "#d2aa00", // text
            900: "#ad7c10", // text
            1000: "#915e0d" // text
          },
          orange: {
            DEFAULT: "#f4df89",
            100: "#ffeccc",
            200: "#ffdfad",
            300: "#fdd291",
            400: "#ffbb63",
            500: "#ffa037", // disable
            600: "#f68511", // placeholder
            700: "#e46f00", // text
            800: "#cb5d00", // text
            900: "#b14c00", // text
            1000: "#953d00" // text
          },
          transparentBlack: {
            100: "#0000001A",
            200: "#00000033",
            300: "#0000004D",
            400: "#00000066",
            500: "#00000080",
            600: "#00000099",
            700: "#000000B2",
            800: "#000000CC",
            900: "#000000E5",
            1000: "#000000F2"
          },
          transparentWhite: {
            100: "#ffffff1A",
            200: "#ffffff33",
            300: "#ffffff4D",
            400: "#ffffff66",
            500: "#ffffff80",
            600: "#ffffff99",
            700: "#ffffffB2",
            800: "#ffffffCC",
            900: "#ffffffE5",
            1000: "#ffffffF2"
          },
        },
      },
    },
  },
};
export default config;
