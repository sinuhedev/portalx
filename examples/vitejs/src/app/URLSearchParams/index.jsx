import React, { useEffect, useState } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import { Link } from 'components'
import './style.css'

export default function URLSearchParams ({ name, className, style, qs }) {
  const { state, fx } = useFx(functions)

  useEffect(() => {
    console.info(qs)
  }, [qs])

  return (
    <main className={css(name, className, '')} style={style}>
      URLSearchParams
      <br />
      <br />
      <Link href='#/URLSearchParams' value={{ id: 4000 }}>
        Link id=4000
      </Link>
      <br />
      <Link href='#/URLSearchParams' value={{ user: 'Maceda', demo: 200 }}>
        Link user=Maceda demo=200
      </Link>
      <br />
      <br />
      <pre style={{ margin: '0 50px 0 50px' }}>
        {JSON.stringify(qs, undefined, 2)}
      </pre>
    </main>
  )
}
