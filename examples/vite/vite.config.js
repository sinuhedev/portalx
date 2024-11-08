import { execSync } from 'node:child_process'
import fs from 'node:fs'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'

const CWD = process.cwd()
const host = '0.0.0.0'
const port = 3000

function getVersion (mode) {
  const { version } = JSON.parse(fs.readFileSync('./package.json'))

  const date = new Date()
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const releaseDate = (
    ('0' + date.getDate()).slice(-2) +
      '/' +
      monthNames[date.getMonth()] +
      '/' +
      date.getFullYear() +
      ' ' +
      (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
      ':' +
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
      ':' +
      (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  )

  let gitHash = ''
  try {
    gitHash = (execSync('git rev-parse --short HEAD') + '').replace(/\n|\r/g, '')
  } catch (e) {
    console.error(e)
  }

  return `version=${version}, env=${mode}, release-date=${releaseDate}, git-hash=${gitHash}`
}

export default defineConfig(({ mode }) => {
  return {
    server: {
      host,
      port
    },

    base: '',
    envDir: CWD,
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
      react(),
      {
        name: 'html',
        transformIndexHtml (html) {
          return html.replaceAll('%VERSION%', getVersion(mode))
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
          'src/index.jsx'
        ]
      }
    }

  }
})
