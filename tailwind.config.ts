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
            DEFAULT: "#6a707f",
            25: "#fafbfd",
            50: "#f5f7fb",
            75: "#f4f4f4",
            100: "#edeff4",
            200: "#d8dfe7",
            300: "#c4cfda",
            400: "#8a91a3",
            500: "#6a707f",
            600: "#4e515c",
          },
          blue: {
            DEFAULT: "#1a4fa1",
            50: "#f0f6fd",
            300: "#2183cb",
            500: "#1a4fa1",
          },
          cyan: {
            DEFAULT: "#00a3e0",
            400: "#66b1ff",
            500: "#00a3e0",
          },
          green: {
            DEFAULT: "#0e5942",
            50: "#f4f9f6",
            100: "#e2f1e9",
            300: "#38a169",
            500: "#0e5942",
          },
          emerald: {
            DEFAULT: "#45da8a",
            500: "#45da8a",
          },
          rose: {
            DEFAULT: "#f56c6c",
            400: "#f56c6c",
          },
          pink: {
            DEFAULT: "#ff1464",
            400: "#ff1464",
          },
          red: {
            DEFAULT: "#ff6154",
            50: "#fdf3f5",
            100: "#FFE0E0",
            200: "#ff6154",
            300: "#ff5252",
            500: "#f21a11",
            600: "#b72929",
          },
          yellow: {
            DEFAULT: "#F8D642",
            25: "#fff5e1",
            50: "#FFF9E5",
            100: "#FFF3CC",
            200: "#FFE799",
            300: "#FFDB66",
            400: "#FFD033",
            500: "#F8D642",
            600: "#CCB633",
            700: "#998722",
            800: "#665611",
            900: "#332B08",
          },
          purple: {
            DEFAULT: "#805ad5",
            100: "#e9d8fd",
            200: "#d6bcfa",
            400: "#9f7aea",
            500: "#805ad5",
            600: "#682ad5",
          },
          orange: {
            DEFAULT: "#FF8A00",
            600: "#ea580c",
            700: "#B94726",
          },
        },
      },
    },
  },
};
export default config;
