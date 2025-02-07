import React, { useEffect } from 'react'
import './style.css'
import { useFx } from 'portalx'
import { Button } from 'components'
import functions from './functions'
import { css } from 'utils'

export default function Home ({ className, style }) {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <main className={css('Home', className, 'container')} style={style}>

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
