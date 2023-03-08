import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [eslint()],
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
});
