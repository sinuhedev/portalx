import React, { useEffect, useRef } from 'react'
import { useFx, startViewTransition } from 'portalx'
import functions from './functions'

const Pages = () => {
  const { state, fx, qs } = useFx(functions, true)

  const Page = state.page.content
  const page = useRef()

  // page
  useEffect(() => {
    startViewTransition(() => fx.getPage(qs), page, 'fade')
  }, [qs.hash])

  return (
    <>
      <button type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Blue</button>

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

export default Pages
