import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { meta as headMeta } from './src/content/meta.js'

// The cloud preview hostname changes between sessions, so it is supplied at
// launch time (VITE_PREVIEW_HOST) rather than written into the repository.
const previewHost = process.env.VITE_PREVIEW_HOST

// Each language is built separately and deployed as its own Worker, so one
// edition can never overwrite the other: English goes to dist/, Spanish to
// dist-es/ (see wrangler.jsonc and wrangler.es.jsonc).
const isSpanish = process.env.VITE_LOCALE === 'es'
const locale = isSpanish ? 'es' : 'en'

const contentFile = fileURLToPath(
  new URL(isSpanish ? './src/content/site.es.js' : './src/content/site.js', import.meta.url),
)
const chromeFile = fileURLToPath(
  new URL(isSpanish ? './src/content/ui.es.js' : './src/content/ui.en.js', import.meta.url),
)

// index.html carries English defaults. This rewrites the document language,
// title and social metadata for whichever locale is being built.
function localizeHtml() {
  const meta = headMeta[locale]

  return {
    name: 'localize-html',
    transformIndexHtml(html) {
      return html
        .replace(/<html lang="[^"]*"/, `<html lang="${meta.lang}"`)
        .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
        .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${meta.description}$2`)
        .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${meta.ogTitle}$2`)
        .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${meta.ogDescription}$2`)
    },
  }
}

export default defineConfig({
  plugins: [localizeHtml(), react()],
  resolve: {
    alias: {
      '#content': contentFile,
      '#chrome': chromeFile,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: previewHost ? [previewHost] : [],
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: previewHost ? [previewHost] : [],
  },
  build: {
    outDir: isSpanish ? 'dist-es' : 'dist',
    assetsDir: 'assets',
  },
})
