'use client'

import 'theme/index.css'
import Link from 'next/link'
import { useFx } from 'portalx'
import functions from './functions'

function Layout ({ children }) {
  const { state, fx } = useFx(functions, true)

  return (
    <html>
      <head>
        <title>{process.env.WEB_TITLE}</title>
        <link rel='shortcut icon' href='logo.svg' />
      </head>
      <body className=''>

        <div style={{ display: 'flex', gap: '20px' }}>

          <button onClick={e => fx.increment(e)}>increment</button>
          {'  '}
          <button onClick={e => fx.decrement(e)}>decrement</button>
          {'  '}
          <button onClick={() => fx.zero({ value: 0 })}>zero</button>
          {'  '}
          {state.num}
          {'  '}
          {state.loading ? <span> Loading... </span> : <span> View.. </span>}
        </div>

        <br />

        <div>
          <Link href='/'>Home</Link>
          {'   '}
          <Link href='/demo'>Demo</Link>
          {'   '}
          <Link href='/no'>no</Link>
        </div>
        <br />
        {children}
      </body>
    </html>
  )
}

export default Layout
