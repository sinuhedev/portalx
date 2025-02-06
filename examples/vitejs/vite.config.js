import { version } from './package.json'
import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const CWD = process.cwd()

  return {
    server: {
      host: '0.0.0.0',
      port: 3000
    },

    base: '',
    envPrefix: 'WEB_',
    envDir: CWD,
    root: CWD + '/src',
    publicDir: CWD + '/public',
    resolve: {
      alias: {
        assets: CWD + '/src/assets',
        components: CWD + '/src/components',
        containers: CWD + '/src/containers',
        services: CWD + '/src/services',
        utils: CWD + '/src/utils'
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
      react(),
      {
        name: 'html',
        transformIndexHtml (html) {
          let gitHash = ''
          try {
            gitHash = (execSync('git rev-parse --short HEAD') + '').replace(/\n|\r/g, '')
          } catch (e) {
            console.error(e)
          }

          return html.replaceAll('%VERSION%', `version=${version}, env=${mode}, release-date=${new Date()}, git-hash=${gitHash}`)
        }
      }
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
          'src/index.jsx',
          'src/assets/i18n'
        ]
      }
    }

  }
})
