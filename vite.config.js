import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import serveStatic from 'serve-static'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-parent-games-dir',
      configureServer(server) {
        // Serve the parent folder (JS games) under the /games alias
        // so that the local React dev server can serve them natively.
        const parentDir = path.resolve(__dirname, '..')
        server.middlewares.use('/games', serveStatic(parentDir))
      }
    }
  ],
})
