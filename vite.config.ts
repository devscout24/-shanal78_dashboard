import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },

  server: {
    proxy: {
      "/data-team": {
        target: "https://data.according2hr.com",
        // changeOrigin: true,
      },
      // "/messages": {
      //   target: "https://data-team-service-1087487272136.us-east1.run.app",
      //   changeOrigin: true,
      // },
      // "/compliance": {
      //   target: "https://data-team-service-1087487272136.us-east1.run.app",
      //   changeOrigin: true,
      // },
    },
  },
});
