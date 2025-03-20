import { useEffect, useState } from 'react'

const env = import.meta.env

function useQueryString () {
  const getQueryString = () => ({
    hash: window.location.hash.split('?')[0],
    queryString: Object.fromEntries(new URLSearchParams(window.location.hash.split('?')[1]))
  })

  const [queryString, setQueryString] = useState(getQueryString())

  useEffect(() => {
    window.addEventListener('popstate', () => setQueryString(getQueryString()))
    return () => {
      window.removeEventListener('popstate', () => setQueryString(getQueryString()))
    }
  }, [])

  return queryString
}

function useResize () {
  const cssVar = (e) => window.getComputedStyle(document.body).getPropertyValue(e) === 'true'

  const getResize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
    landscape: window.matchMedia('(orientation: landscape)').matches,
    portrait: window.matchMedia('(orientation: portrait)').matches,
    sm: cssVar('--sm'),
    md: cssVar('--md'),
    lg: cssVar('--lg'),
    xl: cssVar('--xl'),
    xxl: cssVar('--xxl')
  })

  const [resize, setResize] = useState(getResize())

  useEffect(() => {
    window.addEventListener('resize', () => setResize(getResize()))
    return () => {
      window.removeEventListener('resize', () => setResize(getResize()))
    }
  }, [window.innerWidth, window.innerHeight])

  return resize
}

async function startViewTransition (fun = () => {}, ref = null, viewTransitionName = '') {
  if (!document.startViewTransition) return fun()

  if (ref && ref.current) {
    ref.current.style.viewTransitionName = viewTransitionName
    await document.startViewTransition(fun).finished
    ref.current.style.viewTransitionName = ''
  }
}

function sum (a, b) {
  return a + b
}

export {
  env,
  useQueryString,
  useResize,
  startViewTransition,
  sum
}
