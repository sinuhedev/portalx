'use client'

import { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { css } from '../../../util'
import './style.css'

export default function SubPageHello () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('SubPageHello', '')}>
      SubPageHello
    </main>
  )
}
