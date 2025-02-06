'use client'

import { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { css } from 'util'
import './style.css'

export default function URLSearchParams () {
  const { state, fx } = useFx(functions)
  const searchParams = useSearchParams()

  return (
    <main className={css('URLSearchParams', '')}>
      URLSearchParams
      <br />
      <br />

      <Link href={{
        pathname: '/URLSearchParams',
        query: { }
      }}
      >
        Link
      </Link>
      <br />
      <Link href={{
        pathname: '/URLSearchParams',
        query: { id: 4000 }
      }}
      >
        Link id=4000
      </Link>
      <br />
      <Link href={{
        pathname: '/URLSearchParams',
        query: { user: 'Maceda', demo: 200 }
      }}
      >
        Link user=Maceda demo=200
      </Link>

      <br />
      <br />

      <pre style={{ margin: '0 50px 0 50px' }}>
        {JSON.stringify(Object.fromEntries(searchParams.entries()), undefined, 2)}
      </pre>

      <ul>
        <li>{'id: ' + searchParams.get('id')}</li>
        <li>{'user: ' + searchParams.get('user')}</li>
        <li>{'demo: ' + searchParams.get('demo')}</li>
      </ul>

    </main>
  )
}
