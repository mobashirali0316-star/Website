import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://mobashirali.in',
      dynamicRoutes: [
        '/services',
        '/portfolio',
        '/about',
        '/faq',
        '/privacy-policy',
        '/terms',
        '/contact'
      ]
    })
  ],
})
