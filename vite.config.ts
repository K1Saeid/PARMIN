import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep the development server lightweight for browser-based previews.
export default defineConfig({
  plugins: [react()],
  server: { host: "0.0.0.0" },
});
