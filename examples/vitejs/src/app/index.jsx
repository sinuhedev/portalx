import React, { useEffect, useState, useRef, lazy } from 'react'
import { useFx, Portalx } from 'portalx'
import { Translate, Icon, I18n, Menu } from 'components'
import functions from './functions'
import { useQueryString, useResize, startViewTransition } from 'utils'

export default function App () {
  const portalx = useFx(functions)
  const { state, fx } = portalx

  const [Page, setPage] = useState()
  const qs = useQueryString()
  const resize = useResize()
  const ref = useRef()

  useEffect(() => {
    const hash = ['', '#/'].includes(qs.hash) ? '#/Home' : qs.hash

    const page = lazy(async () => {
      const path = hash.substring(2).split('/')

      try {
        if (path.length === 1) {
          return await import(`./${path[0]}/index.jsx`)
        } else if (path.length === 2) {
          return await import(`./${path[0]}/${path[1]}/index.jsx`)
        }
      } catch (e) {
        console.error(e)
        return await import('./Http/NotFound/index.jsx')
      }
    })

    startViewTransition(setPage(page), ref.current, 'fade')
  }, [qs.hash])

  return (
    <Portalx value={portalx}>
      <header style={{ display: 'flex', gap: '20px' }}>
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

      <main ref={ref} className='m-2'>
        {Page && <Page qs={qs} resize={resize} />}
      </main>

    </Portalx>
  )
}
