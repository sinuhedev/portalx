import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function SubPageHello () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('SubPageHello', '')}>
      SubPageHello
    </main>
  )
}
