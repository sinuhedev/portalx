import React from 'react'
import { useFx, i18n, css } from 'portalx'
import i18nFile from 'assets/i18n'
import './style.css'

/**
 * util
 */
const geti18n = locale =>
	locale ??
	(window.localStorage && window.localStorage.getItem('i18n')) ??
	i18nFile.currentLocale

const seti18n = locale =>
	window.localStorage && window.localStorage.setItem('i18n', locale)

/**
 * I18n
 */

const I18n = ({ value, args = [] }) => {
	const { context } = useFx()
	return i18n(value, args, i18nFile, geti18n(context.state.i18n))
}

const Translate = ({ value, name, onChange = () => {}, className, style }) => (
	<article className={css('Translate-component', className)} style={style}>
		<select
			name={name}
			value={geti18n(value)}
			onChange={e => {
				onChange(e)
				seti18n(e.target.value)
			}}>
			{i18nFile.locales.map(e => (
				<option key={e} value={e}>
					{e}
				</option>
			))}
		</select>
	</article>
)

export { I18n, Translate }
