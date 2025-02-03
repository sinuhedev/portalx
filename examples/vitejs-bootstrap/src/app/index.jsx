import React, { useEffect, useRef } from 'react'
import { useFx, ContextFx, startViewTransition, useLocation, useResize } from 'portalx'
import { Link, Icons } from 'components'
import functions from './functions'

export default function App () {
  const context = useFx(functions)
  const { state, fx } = context

  // hooks
  const qs = useLocation()
  const resize = useResize()

  const Page = state.page.content
  const page = useRef()

  // page
  useEffect(() => {
    startViewTransition(() => fx.getPage(qs), page, 'fade')
  }, [qs.hash])

  return (
    <>
      <ContextFx value={context}>
        <div>
          <Link href='/' className='m-2'>
            /
          </Link>
          <Link href='#/Home' className='m-2'>
            Home
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
