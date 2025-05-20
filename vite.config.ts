import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  plugins: [react()],
  preview: {
    port: 8082,
    strictPort: true,
  },
  server: {
    port: 8082,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8082",
  },
});
