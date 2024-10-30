import React, { useEffect, useState, flushSync, useRef } from 'react'
import './style.css'
import { css, startViewTransition } from 'portalx'

export default ({
	children,
	name,
	value,
	type,
	className,
	style,
	readOnly,
	disabled,
	I18n,
	onChange
}) => {
	const self = useRef()

	return (
		<article
			className={css('Counter-component', className)}
			style={style}
			name={name}>
			<button
				onClick={e => {
					startViewTransition(() => onChange(e), self, 'count')
				}}>
				Increment
			</button>

			<label ref={self}>{value}</label>
		</article>
	)
}
