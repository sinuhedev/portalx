'use client'

import React, { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { css } from 'utils'
import './style.css'

export default function Env () {
  const { state, fx } = useFx(functions)

  // env
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_TITLE)
  }, [])

  return (
    <main className={css('Env', '')}>
      Env

      <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>

    </main>
  )
}
