import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
	{ files: ['**/*.{js,jsx}'] },
	{
		languageOptions: {
			globals: { ...globals.browser, PROCESS_ENV: 'readonly' }
		}
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'react/prop-types': 0,
			'react/display-name': 0,
			'no-case-declarations': 0
		}
	},
	{
		ignores: ['out']
	}
]
