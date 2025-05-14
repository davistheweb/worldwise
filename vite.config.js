import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
});
