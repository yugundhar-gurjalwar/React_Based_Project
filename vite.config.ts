import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/React_Based_Project/" : "/",
  plugins: [react()],
}));
