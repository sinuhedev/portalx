'use client'

import { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { css } from 'utils'
import './style.css'

export default function ContextPage () {
  const { state, fx, context } = useFx(functions)

  useEffect(() => {
    fx.init()
  }, [])

  return (
    <main className={css('ContextPage', '')}>
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
