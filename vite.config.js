import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Xora-landing/', // 👈 this line is essential for GitHub Pages
  plugins: [react()],
})
