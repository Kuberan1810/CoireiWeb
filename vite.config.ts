import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Sitemap is maintained manually in public/sitemap.xml for full control
// over priority tiers, changefreq, and page visibility.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
})
