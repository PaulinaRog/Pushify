import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import url from "@rollup/plugin-url";

export default defineConfig({
  plugins: [
    react(),
    url({
      include: /\.(png|jpe?g|gif|svg)$/i,
      limit: 8192,
    }),
  ],
});
