import { useState, useEffect } from 'react'

/**
 * useResize
 * @returns
 */
function useResize () {
  const getResize = () => {
    const style = window.getComputedStyle(document.body)

    return {
      width: window.innerWidth,
      height: window.innerHeight,
      landscape: window.matchMedia('(orientation: landscape)').matches,
      portrait: window.matchMedia('(orientation: portrait)').matches,
      sm: style.getPropertyValue('--sm'),
      md: style.getPropertyValue('--md'),
      lg: style.getPropertyValue('--lg'),
      xl: style.getPropertyValue('--xl'),
      xxl: style.getPropertyValue('--xxl')
    }
  }

  const [resize, setResize] = useState(getResize())

  useEffect(() => {
    window.addEventListener('resize', () => setResize(getResize()))
    return () => {
      window.removeEventListener('resize', () => setResize(getResize()))
    }
  }, [window.innerWidth, window.innerHeight])

  return resize
}

/**
 * useQueryString
 * @returns
 */
function useQueryString () {
  const getLocation = () => {
    const { hash } = window.location
    const queryString = Object.fromEntries(
      new URLSearchParams(hash.split('?')[1])
    )

    let myHash = '/'
    if (['#/', ''].includes(hash)) myHash = '/'
    else myHash = hash.split('#/')[1].split('?')[0]

    return {
      hash: myHash,
      ...queryString
    }
  }

  const [path, setPath] = useState(getLocation())

  useEffect(() => {
    window.addEventListener('popstate', () => setPath(getLocation()))
    return () => {
      window.removeEventListener('popstate', () => setPath(getLocation()))
    }
  }, [])

  return path
}

export { useResize, useQueryString }
