import React, { useEffect, useState } from 'react'
import { useFx, css, startViewTransition } from 'portalx'
import functions from './functions'
import { Counter, Counter2 } from 'components'
import './style.css'

const CounterPage = ({ name, className, style, resize, queryString }) => {
  const { state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '')} style={style}>
      CounterPage
      <Counter
        value={state.count}
        onChange={() => {
          fx.set({ count: state.count + 1 })
        }}
      />
      <br />
      <br />
      <Counter2
        value={state.count2}
        onChange={() => {
          fx.set({ count2: state.count2 + 10 })
        }}
      />
    </main>
  )
}

export default CounterPage
