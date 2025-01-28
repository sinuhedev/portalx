import React, { useEffect } from 'react'
import './style.css'
import { useFx, css } from 'portalx'
import { Icon, I18n, Translate, Button } from 'components'
import functions from './functions'

const Home = ({ name, className, style }) => {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <main className={css(name, className, 'container')} style={style}>
      <Icon value='globe' />
      <Translate />
      <I18n value='page.name' args={['Sinuhe', 'Maceda', 'Bouchan']} />

      <div>
        <p>Simple actions/Reducer:</p>
        <Button onClick={e => fx.increment(e)}>+</Button>
        <Button onClick={e => fx.decrement(e)}>-</Button>
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
