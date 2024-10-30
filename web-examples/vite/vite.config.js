import { execSync } from 'node:child_process'
import { version } from './package.json'
import os from 'node:os'
import fs from 'node:fs'
import toml from 'toml'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

const CWD = process.cwd()

const getEnv = mode => {
	let env = {
		env: undefined,
		html: {
			title: '',
			head: '',
			body: ''
		}
	}
	try {
		const envFile = `./.env-${mode}.toml`
		if (fs.existsSync(envFile)) {
			env = toml.parse(fs.readFileSync(envFile))
			env.env = mode
		}
	} catch (e) {
		console.error(e)
	}

	// MY_IP
	if (mode === 'localhost') {
		const MY_IP = Object.values(os.networkInterfaces())
			.flat()
			.find(i => ['IPv4', 4].includes(i.family) && !i.internal).address

		env = JSON.parse(JSON.stringify(env).replace(/\${MY_IP}/g, MY_IP))
	}

	return env
}

const gitHash = () => {
	let gitHash = ''
	try {
		gitHash = (execSync('git rev-parse --short HEAD') + '').replace(
			/\n|\r/g,
			''
		)
	} catch (e) {
		console.error(e)
	}

	return gitHash
}

const releaseDate = () => {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]

	const date = new Date()

	return (
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
}

export default defineConfig(args => {
	const env = getEnv(args.mode)

	return {
		server: {
			host: '0.0.0.0',
			port: 3000
		},

		preview: {
			host: '0.0.0.0',
			port: 3000
		},

		define: {
			PROCESS_ENV: env
		},

		build: {
			outDir: '../out',
			assetsDir: 'assets'
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

		css: {
			postcss: {
				plugins: [autoprefixer]
			}
		},

		plugins: [
			react(),
			{
				name: 'html',
				transformIndexHtml(html) {
					const versionFull = `version=${version}, env=${
						env.env
					}, release-date=${releaseDate()}, git-hash=${gitHash()}`
					return html
						.replaceAll('${title}', env.html.title)
						.replaceAll('${version}', versionFull)
						.replaceAll('${head}', env.html.head)
						.replaceAll('${body}', env.html.body)
				}
			}
		]
	}
})
