import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'LifeOS Career Dashboard',
        short_name: 'LifeOS',
        description: 'Advanced career upskilling and habit tracking dashboard',
        theme_color: '#0f172a', // slate-900
        background_color: '#f8fafc', // slate-50
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'app-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  build: {
    chunkSizeWarningLimit: 1000
  }
})
