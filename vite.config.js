import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Web',    // 👈 Use '/' if deploying to root domain like eyobel.com
})


