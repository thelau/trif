import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    port: 4000,
    https: {
      cert: './cert.pem',
      key: './key.pem'
    },
    open: '/',
    host: true,
    watch: {
      usePolling: true
    }
  },


})