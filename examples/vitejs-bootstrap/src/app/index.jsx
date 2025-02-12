import React, { useEffect, useRef } from 'react'
import { useFx, Portalx, useLocation, useResize } from 'portalx'
import { Link } from 'components'
import functions from './functions'

export default function App () {
  const portalx = useFx(functions)
  const { state, fx } = portalx

  // hooks
  const qs = useLocation()
  const resize = useResize()

  const Page = state.page
  const page = useRef()

  // page
  useEffect(() => {
    fx.getPage(qs)
  }, [qs.hash])

  return (
    <>
      <Portalx value={portalx}>
        <div className='mx-5 my-3'>
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
              qs={qs}
              resize={resize}
            />}
        </div>
      </Portalx>
    </>
  )
}
