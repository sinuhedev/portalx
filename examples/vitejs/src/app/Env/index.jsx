import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import { env } from 'util'
import './style.css'

export default function Env ({ name, className, style }) {
  const { state, fx } = useFx(functions)

  // env
  useEffect(() => {
    console.log(env)
  }, [])

  return (
    <main className={css(name, className, '')} style={style}>

      <br />
      <br />

      <div style={{ display: 'flex' }}>
        <pre style={{ margin: '0 50px 0 50px' }}>
          env = {JSON.stringify(env, undefined, 2)}
        </pre>
      </div>
    </main>
  )
}
