import React, { useEffect, useState } from 'react'
import { useFx, css, href, useQueryString } from 'portalx'
import functions from './functions'
import './style.css'

const URLSearchParams = ({ name, className, style }) => {
  const { state, fx } = useFx(functions)
  const qs = useQueryString()

  useEffect(() => {
    console.info(qs)
  }, [qs])

  return (
    <main className={css(name, className, '')} style={style}>
      URLSearchParams
      <br />
      <br />
      <a href={href('#/URLSearchParams', { id: 4000 })}>Link id=4000</a>
      <br />
      <a href={href('#/URLSearchParams', { user: 'Maceda' })}>Link user=Maceda</a>
      <br />
      <br />
      <pre style={{ margin: '0 50px 0 50px' }}>
        {JSON.stringify(qs, undefined, 2)}
      </pre>
    </main>
  )
}

export default URLSearchParams
