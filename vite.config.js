import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-Website-main/", // Make sure this matches your repo name
  build: {
    outDir: "dist",
  }
});
