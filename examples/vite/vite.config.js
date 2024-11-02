import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const CWD = process.cwd()

export default defineConfig(() => {
  return {
    server: {
      host: '0.0.0.0',
      port: 3000
    },

    base: '',
    root: CWD + '/src',
    publicDir: CWD + '/public',
    resolve: {
      alias: {
        assets: CWD + '/src/assets',
        components: CWD + '/src/components',
        containers: CWD + '/src/containers',
        main: CWD + '/src/main',
        pages: CWD + '/src/pages',
        services: CWD + '/src/services',
        util: CWD + '/src/util'
      }
    },

    plugins: [react()]
  }
})
