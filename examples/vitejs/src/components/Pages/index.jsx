import React, { useEffect, useState, useRef, lazy } from 'react'
import { startViewTransition } from 'portalx'

export default ({ className, style }) => {
  const [Page, setPage] = useState()
  const ref = useRef()

  const getLocation = () => ({
    hash: window.location.hash.split('?')[0],
    ...Object.fromEntries(new URLSearchParams(window.location.hash.split('?')[1]))
  })
  const [qs, setQS] = useState(getLocation())

  useEffect(() => {
    window.addEventListener('popstate', () => setQS(getLocation()))
    return () => {
      window.removeEventListener('popstate', () => setQS(getLocation()))
    }
  }, [])

  useEffect(() => {
    const page = lazy(async () => {
      let currentPage = ['#/', ''].includes(qs.hash) ? 'Home' : qs.hash.substring(2)
      try {
        const path = currentPage.split('/')

        switch (path.length) {
          case 1:
            currentPage = await import(`../../app/${path[0]}/index.jsx`)
            break
          case 2:
            currentPage = await import(`../../app/${path[0]}/${path[1]}/index.jsx`)
            break
        }

        return currentPage
      } catch (e) {
        console.error(e)
        return await import('../../app/Http/NotFound/index.jsx')
      }
    })

    startViewTransition(setPage(page), ref, 'fade')
  }, [qs.hash])

  return Page &&
    <main ref={ref} className={className} style={style}>
      {Page ? <Page qs={qs} /> : <div />}
    </main>
}
