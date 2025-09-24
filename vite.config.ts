import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.MP4", "**/*.mp4", "**/*.avi", "**/*.mov", "**/*.wmv", "**/*.flv", "**/*.webm","**/*.JPG"],
})
