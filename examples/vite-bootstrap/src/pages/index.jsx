import React, { useEffect, useRef } from 'react'
import { useFx, startViewTransition, useQueryString } from 'portalx'
import { Icon, I18n, Translate } from 'components'
import functions from './functions'
import { env } from 'util'

let HOLAAAA

const Pages = () => {
  const { state, fx } = useFx(functions, { isContext: true })
  const qs = useQueryString()

  const Page = state.page.content
  const page = useRef()

  // env
  useEffect(() => {
    console.log(env)
  }, [])

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
      <div style={{ display: 'flex', gap: '20px' }}>
        <Icon value='globe' />
        <Translate name='i18n' onChange={e => fx.change(e)} value={state.i18n} />
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
        <a href='#/' className='m-2'>
          Home
        </a>
        <a href='#/ContextPage' className='m-2'>
          ContextPage
        </a>
        <a href='#/Mockapi' className='m-2'>
          Mockapi
        </a>
        <a href='#/MockapiAndContainer' className='m-2'>
          MockapiAndContainers
        </a>
        <a href='#/URLSearchParams?id=20&user=Sinuhe' className='m-2'>
          URLSearchParams
        </a>
        <a href='#/SubPage/Hello' className='m-2'>
          SubPage/Hello
        </a>
        <a href='#/Translate' className='m-2'>
          Translate
        </a>
        <a href='#/CounterPage' className='m-2'>
          CounterPage
        </a>
        <a href='#/MediaQuery' className='m-2'>
          MediaQuery
        </a>
        <a href='#/NO' className='m-2'>
          NO
        </a>
      </div>

      <div ref={page}>
        {Page && <Page name={state.page.name} className='m-2' style={{}} />}
      </div>
    </>
  )
}

export default Pages
