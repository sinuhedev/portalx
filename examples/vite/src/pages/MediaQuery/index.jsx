import React, { useEffect, useState } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

const MediaQuery = ({ name, className, style }) => {
	const { state, fx, resize } = useFx(functions)

	return (
		<main className={css(name, className, '')} style={style}>
			<div>
				<section>CSS @container </section>

				<ul className="css-container">
					<li className="landscape">landscape</li>
					<li className="portrait">portrait</li>
					<li className="sm">SM</li>
					<li className="md">MD</li>
					<li className="lg">LG</li>
					<li className="xl">XL</li>
					<li className="xxl">XXL</li>
				</ul>
			</div>

			<div>
				<p>{resize.device}</p>
			</div>
		</main>
	)
}

export default MediaQuery
