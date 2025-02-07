'use client'

import React, { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { Counter, Counter2 } from 'components'
import { css } from 'utils'
import './style.css'

export default function CounterPage () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('CounterPage')}>

      <div className={css('', 'class-test', {}, null, true, false, [], { 'css-false': false }, undefined, { 'css-true': true })}>
        CSS
      </div>

      <div className={css(null)} />
      <div className={css(undefined)} />
      <div className={css([])} />
      <div className={css({})} />
      <div className={css()} />

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
