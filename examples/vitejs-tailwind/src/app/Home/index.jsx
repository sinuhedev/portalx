import React, { useEffect } from 'react'
import './style.css'
import { useFx, css } from 'portalx'
import { Button } from 'components'
import functions from './functions'

export default function Home () {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <main className={css('Home', 'container')}>

      <div>
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
