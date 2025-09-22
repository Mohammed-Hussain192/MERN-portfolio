import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // fixes dev refresh
  },
  preview: {
    historyApiFallback: true, // fixes preview refresh
  },
  build: {
    outDir: "dist",
  },
});
