import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    port: 4000,
    open: '/',
    host: true,
    allowedHosts: ['localhost', '127.0.0.1', '*.ngrok.io', '*.ngrok-free.dev', 'fattily-lentic-eliseo.ngrok-free.dev'],
    watch: {
      usePolling: true
    }
  },


})