import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/Final-Project-ReactCourse", // Change this to your repository name
  plugins: [preact()],
})
