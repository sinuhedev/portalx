import React from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function SubPageHello ({ name, className, style }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '')} style={style}>
      {name}
    </main>
  )
}
