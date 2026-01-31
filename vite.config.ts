import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Router plugin tạm thời comment để tránh xung đột nếu không sử dụng
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5173,
    host: "localhost",
    strictPort: false,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: false,
      ignored: ["**/node_modules/**", "**/.git/**"],
    },
  },
  optimizeDeps: {
    exclude: [],
    include: ["react", "react-dom", "antd"],
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "antd-vendor": ["antd", "@ant-design/icons"],
        },
      },
    },
  },
});
