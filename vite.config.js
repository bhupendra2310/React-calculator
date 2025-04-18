import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-calculator/', // This is where you specify your repo name (base path)
  plugins: [react()],
})
