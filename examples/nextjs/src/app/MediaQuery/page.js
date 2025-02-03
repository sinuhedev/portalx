'use client'

import { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function MediaQuery () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('MediaQuery', '')}>
      MediaQuery
    </main>
  )
}
