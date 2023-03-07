import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import alias from "@rollup/plugin-alias";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRootDirectory = resolve(__dirname);
export default defineConfig(() => ({
  plugins: [
    eslint(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(projectRootDirectory, "src"),
        },
      ],
    }),
  ],
  build: {
    target: "esnext",
    emptyOutDir: true,

    lib: {
      formats: ["es"],
      entry: "src/main.ts",
    },
    rollupOptions: {
      output: {
        dir: "dist",
        entryFileNames: "main.js",
        format: "esm",
      },
    },
  },
}));
