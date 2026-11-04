import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // lets tests use test() and expect() without importing
    environment: "jsdom",    // simulates a browser for rendering
    setupFiles: "./src/__tests__/setup.jsx",
  },
});