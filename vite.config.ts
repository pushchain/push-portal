import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vitePluginRequire from "vite-plugin-require";
import svgr from "vite-plugin-svgr";
import topLevelAwait from "vite-plugin-top-level-await";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";

import { getPreviewBasePath } from "./basePath";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    topLevelAwait(),
    react(),
    svgr(),
    viteTsconfigPaths({
      root: "./",
    }),
    nodePolyfills(),
    vitePluginRequire.default(),
  ],
  define: {
    global: "globalThis",
  },
  server: {
    port: 3000,
  },
  base: getPreviewBasePath() || undefined,
  build: {
    outDir: "build",
    sourcemap: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        rewards: path.resolve(__dirname, "rewards.html"),
        verification: path.resolve(__dirname, "verification.html"),
      },
    },
  },
});
