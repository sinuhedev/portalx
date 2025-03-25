'use client'

import { useEffect } from 'react'
import { useFx, Portalx } from 'portalx'
import functions from './functions'
import { Link, Icon, Translate, I18n, Icons, Menu } from 'components'
import 'theme/index.css'

function Layout ({ children }) {
  const portalx = useFx(functions)
  const { state, fx } = portalx

  useEffect(() => {
    fx.init()
  }, [])

  return (
    <html>
      <head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <link rel='shortcut icon' href='logo.svg' />
        <meta
          name='version'
          content={`version=${process.env.VERSION}, env=${process.env.NODE_ENV}, release-date=${new Date()}, git-hash=${process.env.GIT_HASH}`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
      </head>

      <body>

        <Portalx value={portalx}>

          <header className='m-2' style={{ display: 'flex', gap: '20px' }}>
            <Icon value='globe' />
            <Translate value={state.i18nLocale} onChange={e => fx.changeI18n(e)} />

            <I18n value='page.name' args={['Sinuhe', 'Maceda', 'Bouchan']} />

            <button onClick={e => fx.increment(e)}>increment</button>
            {'  '}
            <button onClick={e => fx.decrement(e)}>decrement</button>
            {'  '}
            <button onClick={() => fx.zero({ value: 0 })}>zero</button>
            {'  '}
            {state.num}
            {'  '}
            {state.loading ? <span> Loading... </span> : <span> View.. </span>}
          </header>

          <Menu className='m-2' />

          <main className='m-2'>
            {children}
          </main>

        </Portalx>

        <Icons />
      </body>
    </html>
  )
}

export default Layout
