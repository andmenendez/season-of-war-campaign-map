import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage: {
        "noise":
          "url('./src/lib/assets/noise.png')",
      },
      colors: {
        layout: "#20242E",
      }
    }
  },

  plugins: []
} as Config;
