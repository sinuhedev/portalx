import React, { useEffect, useState } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import { Counter, Counter2 } from 'components'
import './style.css'

export default function ({ name, className, style }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '', 'class-test', {}, null, true, false, [], { 'css-false': false }, undefined, { 'css-true': true })} style={style}>
      CounterPage

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
