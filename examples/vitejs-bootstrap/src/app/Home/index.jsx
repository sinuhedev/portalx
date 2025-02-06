import React, { useEffect } from 'react'
import './style.css'
import { useFx } from 'portalx'
import { Button } from 'components'
import functions from './functions'
import { css } from 'util'

export default function Home ({ name, className, style }) {
  const { state, fx } = useFx(functions)

  useEffect(() => {
  }, [])

  return (
    <main className={css(name, className, 'container')} style={style}>

      <p>Simple actions/Reducer:</p>

      <div className='d-flex '>
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
