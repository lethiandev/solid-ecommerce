import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

const isProduction = process.env.NODE_ENV === "production"

export default defineConfig({
  plugins: [solidPlugin()],
  base: isProduction ? "/solid-ecommerce/" : "/",
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
})
