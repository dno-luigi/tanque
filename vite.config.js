import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The cloud preview hostname changes between sessions, so it is supplied at
// launch time (VITE_PREVIEW_HOST) rather than written into the repository.
const previewHost = process.env.VITE_PREVIEW_HOST

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: previewHost ? [previewHost] : [],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
