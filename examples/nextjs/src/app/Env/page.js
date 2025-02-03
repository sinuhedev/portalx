'use client'

import { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function Env () {
  const { state, fx } = useFx(functions)

  // env
  useEffect(() => {
    console.log(process.env.WEB_TITLE)
  }, [])

  return (
    <main className={css('Env', '')}>
      Env

      <h1>{process.env.NEXT_PUBLIC_HELLO}</h1>

    </main>
  )
}
