import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/CIO-Game-MM/",  // <--- Depo adın neyse tam olarak onu yaz
})