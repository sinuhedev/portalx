import React, { useEffect, useRef } from 'react'
import { useFx, Portalx, startViewTransition, useLocation, useResize } from 'portalx'
import { Link, Icons } from 'components'
import functions from './functions'

export default function App () {
  const portalx = useFx(functions)
  const { state, fx } = portalx

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
      <Portalx value={portalx}>
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
      </Portalx>
    </>
  )
}
