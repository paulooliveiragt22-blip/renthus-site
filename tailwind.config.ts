import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "#F8F9FA",
        foreground: "#1f2937",
        renthus: {
          purple: {
            DEFAULT: "#4B1D7A",
            light: "#5E2A94",
            dark: "#3a165e",
          },
          orange: {
            DEFAULT: "#F77F00",
            hover: "#D96E00",
            glow: "rgba(247, 127, 0, 0.14)",
          },
          surface: "#F8F9FA",
          elevated: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-renthus": "linear-gradient(135deg, #4B1D7A 0%, #F77F00 100%)",
        "gradient-cta": "linear-gradient(180deg, #F77F00 0%, #D96E00 100%)",
        "radial-glow": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "renthus-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "renthus-card-hover":
          "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
