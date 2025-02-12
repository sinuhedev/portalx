import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function SubPageHello ({ className, style }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('SubPageHello', className, '')} style={style}>
      SubPageHello
    </main>
  )
}
