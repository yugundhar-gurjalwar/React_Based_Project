import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f4f6fa",
        ink: "#172033",
        muted: "#64748b",
        line: "#e2e8f0",
        brand: "#2563eb",
      },
      boxShadow: {
        card: "0 10px 28px rgba(15, 23, 42, 0.07)",
        drawer: "-18px 0 40px rgba(15, 23, 42, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
