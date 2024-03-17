import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.png", "manifest.png"],
  manifest: {
    name: "Makki Potfolio",
    short_name: "myPortfolio",
    description:
      "An App That shows you a peek of my skills in frontEnd developing",
    icons: [
      {
        src: "./public/favicon.png",
        sizes: "192x192",
        type: "favicon.png",
      },
      {
        src: "./public/manifest.png",
        sizes: "512x512",
        type: "manifest.png",
        purpose: "favicon",
      },
    ],
    theme_color:"#283845ff",
    background_color:"rgb(6, 35, 58)",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
