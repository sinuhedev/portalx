import React, { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { css } from 'utils'
import './style.css'

export default function SubPageHello ({ className, style }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('SubPageHello', className, '')} style={style}>
      SubPageHello
    </main>
  )
}
