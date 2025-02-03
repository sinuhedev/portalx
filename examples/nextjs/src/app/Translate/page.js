'use client'

import { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function Translate () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('Translate', '')}>
      Translate
    </main>
  )
}
