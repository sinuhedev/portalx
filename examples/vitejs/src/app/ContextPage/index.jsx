import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function ContextPage ({ name, className, style }) {
  const { state, fx, context } = useFx(functions)

  useEffect(() => {
    fx.init()
  }, [])

  return (
    <main className={css(name, className, '')} style={style}>

      <br />
      <button onClick={e => context.fx.increment(e)}>increment</button>
      {'  '}
      <button onClick={e => context.fx.decrement(e)}>decrement</button>
      {'  '}
      <button onClick={() => context.fx.zero({ value: 0 })}>zero</button>
      {'  '}
      {context.state.num}

    </main>
  )
}
