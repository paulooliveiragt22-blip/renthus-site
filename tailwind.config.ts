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
        background: "#050208",
        foreground: "#f4f4f5",
        renthus: {
          purple: {
            DEFAULT: "#4B0082",
            dark: "#1A0B2E",
            light: "#7B2CBF",
          },
          orange: {
            DEFAULT: "#FF6B00",
            glow: "rgba(255, 107, 0, 0.15)",
          },
        },
      },
      backgroundImage: {
        "gradient-renthus": "linear-gradient(135deg, #4B0082 0%, #FF6B00 100%)",
        "gradient-cta": "linear-gradient(135deg, #FF8C00 0%, #FF4500 100%)",
        "radial-glow": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "orange-glow": "0 0 24px -4px rgba(255, 107, 0, 0.5)",
        "orange-glow-lg": "0 0 40px -6px rgba(255, 107, 0, 0.45)",
        card: "0 0 0 1px rgba(255, 255, 255, 0.06), 0 24px 48px -24px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
