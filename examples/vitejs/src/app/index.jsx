import React, { useEffect, useRef } from 'react'
import { useFx, ContextFx, startViewTransition, useLocation, useResize } from 'portalx'
import { Icon, Icons, I18n, Translate, Link } from 'components'
import functions from './functions'

export default function App () {
  const context = useFx(functions, true)
  const { state, fx } = context
  // hooks
  const qs = useLocation()
  const resize = useResize()

  const Page = state.page.content
  const page = useRef()

  // services
  useEffect(() => {
    fx.setServices()
  }, [])

  // page
  useEffect(() => {
    startViewTransition(() => fx.getPage(qs), page, 'fade')
  }, [qs.hash])

  return (
    <>
      <ContextFx value={context}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Icon value='globe' />
          <Translate />
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
        </div>

        <br />

        <div>
          <Link href='/' className='m-2'>
            /
          </Link>
          <Link href='#/' className='m-2'>
            Home
          </Link>
          <Link href='#/Env' className='m-2'>
            Env
          </Link>
          <Link href='#/ContextPage' className='m-2'>
            ContextPage
          </Link>
          <Link href='#/Mockapi' className='m-2'>
            Mockapi
          </Link>
          <Link href='#/MockapiAndContainer' className='m-2'>
            MockapiAndContainers
          </Link>
          <Link href='#/URLSearchParams?id=20&user=Sinuhe' className='m-2'>
            URLSearchParams
          </Link>
          <Link href='#/SubPage/Hello' className='m-2'>
            SubPage/Hello
          </Link>
          <Link href='#/Translate' className='m-2'>
            Translate
          </Link>
          <Link href='#/CounterPage' className='m-2'>
            CounterPage
          </Link>
          <Link href='#/MediaQuery' className='m-2'>
            MediaQuery
          </Link>
          <Link href='#/NO' className='m-2'>
            NO
          </Link>

        </div>

        <div ref={page}>
          {Page &&
            <Page
              name={state.page.name}
              className='m-2'
              style={{}}
              qs={qs}
              resize={resize}
            />}
        </div>

        <Icons />
      </ContextFx>
    </>
  )
}
