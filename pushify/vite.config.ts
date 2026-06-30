import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import url from "@rollup/plugin-url";

const apiProxy = {
  "/deezer": {
    target: "https://api.deezer.com",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/deezer/, ""),
  },
  "/musixmatch": {
    target: "https://api.musixmatch.com",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/musixmatch/, ""),
  },
};

export default defineConfig({
  plugins: [
    react(),
    url({
      include: /\.(png|jpe?g|gif|svg)$/i,
      limit: 8192,
    }),
  ],
  server: {
    proxy: apiProxy,
  },
  preview: {
    proxy: apiProxy,
  },
});
