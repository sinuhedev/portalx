import React, { useEffect, useRef } from 'react'
import { useFx, startViewTransition } from 'portalx'
import functions from './functions'

const App = () => {
  const { state, fx, qs } = useFx(functions, { isContext: true })

  const Page = state.page.content
  const page = useRef()

  // page
  useEffect(() => {
    startViewTransition(() => fx.getPage(qs), page, 'fade')
  }, [qs.hash])

  return (
    <>
      <div>
        <a href='#/' className='m-2'>
          Home
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

export default App
