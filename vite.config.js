import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
