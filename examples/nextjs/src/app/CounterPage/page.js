'use client'

import { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function CounterPage () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('CounterPage', '')}>

      counterpage

    </main>
  )
}
