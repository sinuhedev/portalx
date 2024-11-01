import React from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

const Mockapi = ({ name, className, style }) => {
	const { initialState, state, fx } = useFx(functions)

	return (
		<main className={css(name, className, 'container')} style={style}>
			<div>
				<button onClick={() => fx.reset(['users', 'user'])}>Reset</button>

				<button
					onClick={() => {
						fx.reset(['users', 'user'])
						fx.getUser()
					}}>
					Get users
				</button>

				<button
					onClick={() => {
						fx.reset(['users', 'user'])
						fx.getUser(state.form.id)
					}}>
					Get user
				</button>

				<button
					onClick={() => {
						fx.reset(['users', 'user'])
						fx.createUser()
					}}>
					Create user
				</button>

				<button
					onClick={() => {
						fx.reset(['users', 'user'])
						fx.updateUser(state.form.id)
					}}>
					Update user
				</button>

				<button
					onClick={() => {
						fx.reset(['users', 'user'])
						fx.deleteUser(state.form.id)
					}}>
					Delete user
				</button>
			</div>

			<div>
				<div>
					id:{' '}
					<input
						type="text"
						name="form.id"
						value={state.form.id}
						onChange={fx.change}
					/>
				</div>
				<div>
					name:{' '}
					<input
						type="text"
						name="form.name"
						value={state.form.name}
						onChange={fx.change}
					/>
				</div>
			</div>

			<section>
				<article style={{ display: 'flex' }}>
					<pre style={{ margin: '0 50px 0 50px', width: '250px' }}>
						state = {JSON.stringify(state, undefined, 2)}
					</pre>
					<pre style={{ margin: '0 5px 0 5px', width: '250px' }}>
						initialState = {JSON.stringify(initialState, undefined, 2)}
					</pre>
				</article>
			</section>
		</main>
	)
}

export default Mockapi
