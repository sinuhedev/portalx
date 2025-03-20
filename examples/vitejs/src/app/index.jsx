import React, { useEffect, useState, useRef, lazy } from 'react'
import { useFx, Portalx } from 'portalx'
import { Translate, Icon, Link, I18n } from 'components'
import functions from './functions'
import { useQueryString, useResize, startViewTransition } from 'utils'

export default function App () {
  const portalx = useFx(functions)
  const { state, fx } = portalx

  const [Page, setPage] = useState()
  const ref = useRef()
  const qs = useQueryString()
  const resize = useResize()

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

    startViewTransition(setPage(page), ref, 'fade')
  }, [qs.hash])

  return (
    <>
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

        <aside className='m-2'>
          <Link href='/' className='mr-2'>
            /
          </Link>
          <Link href='#/' className='mr-2'>
            Home
          </Link>
          <Link href='#/Env' className='mr-2'>
            Env
          </Link>
          <Link href='#/ContextPage' className='mr-2'>
            ContextPage
          </Link>
          <Link href='#/Mockapi' className='mr-2'>
            Mockapi
          </Link>
          <Link href='#/MockapiAndContainer' className='mr-2'>
            MockapiAndContainers
          </Link>
          <Link href='#/URLSearchParams' value={{ id: 20, user: 'Sinuhe' }} className='mr-2'>
            URLSearchParams
          </Link>
          <Link href='#/SubPage/Hello' className='mr-2'>
            SubPage/Hello
          </Link>
          <Link href='#/Translate' className='mr-2'>
            Translate
          </Link>
          <Link href='#/CounterPage' className='mr-2'>
            CounterPage
          </Link>
          <Link href='#/Image' className='mr-2'>
            Image
          </Link>
          <Link href='#/MediaQuery' className='mr-2'>
            MediaQuery
          </Link>
          <Link href='#/NO' className='mr-2'>
            NO
          </Link>
        </aside>

        <main ref={ref} className='m-2'>
          {Page ? <Page qs={qs} resize={resize} /> : <div>loading</div>}
        </main>

      </Portalx>
    </>
  )
}
