import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    // Allow localtunnel host access to the dev server
    allowedHosts: ['dry-spiders-crash.loca.lt'],
  },
})
