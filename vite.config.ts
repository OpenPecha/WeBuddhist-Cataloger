import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const backendBaseUrl = env.VITE_BACKEND_BASE_URL
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      open: true,
      allowedHosts: true,
      proxy: {
        "/api": {
          target: backendBaseUrl,
          changeOrigin: true,
        },
      }
    },
    preview: {
      host: "0.0.0.0",
      port: 4173,
    },
  }
});
