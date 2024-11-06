import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'

const CWD = process.cwd()
const host = '0.0.0.0'
const port = 3000

export default defineConfig(args => {
  console.info(args)

  return {
    server: {
      host,
      port
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

    build: {
      outDir: '../out',
      assetsDir: 'assets',
      emptyOutDir: true
    },

    css: {
      postcss: {
        plugins: [autoprefixer]
      }
    },

    plugins: [
      react()
    ],

    test: {
      root: './',
      watch: false,
      environment: 'jsdom',
      include: ['test/**/*.js', 'test/**/*.jsx'],
      coverage: {
        all: true,
        reportsDirectory: '.coverage',
        include: ['src/**/*.js', 'src/**/*.jsx'],
        exclude: [
          'src/index.jsx'
        ]
      }
    }

  }
})
