import { defineConfig } from "vite";
import { resolve } from "node:path";

const env = process.env.NODE_ENV;

export default defineConfig({
  build: {
    outDir: "docs",
  },

  //  vite 서버 설정 하는 방법
  server: {
    host: "localhost",
    port: 3000,
    cors: true,
  },

  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: env === "development" ? "[local]__[hash:base64:3]" : "[name]__[local]__[hash:base64:5]",
    },
  },

  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
});
