import React, { useEffect } from 'react'
import './style.css'
import { useFx, css } from 'portalx'
import { Icon, I18n, Translate } from 'components'
import functions from './functions'

const Home = ({ name, className, style }) => {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <main className={css(name, className, 'container')} style={style}>
      <Icon value='globe' />

      <Translate name='i18n' onChange={e => fx.change(e)} value={state.i18n} />
      <I18n value='page.name' args={['Sinuhe', 'Maceda', 'Bouchan']} />

      <div>
        <p>Simple actions/Reducer:</p>
        <button className='btn btn-primary' onClick={e => fx.increment(e)}>+</button>
        <button onClick={e => fx.decrement(e)}>-</button>
      </div>

      <div style={{ display: 'flex' }}>
        <pre style={{ margin: '0 50px 0 50px' }}>
          state = {JSON.stringify(state, undefined, 2)}
        </pre>
      </div>

    </main>
  )
}

export default Home
