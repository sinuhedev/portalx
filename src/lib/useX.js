'use client'

import { useState, useEffect } from 'react'

/**
 * useResize
 */
function useResize () {
  const [resize, setResize] = useState({
    width: 0,
    height: 0,
    landscape: false,
    portrait: false,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  })

  if (typeof window !== 'undefined') {
    const getResize = () => {
      const style = window.getComputedStyle(document.body)

      return {
        width: window.innerWidth,
        height: window.innerHeight,
        landscape: window.matchMedia('(orientation: landscape)').matches,
        portrait: window.matchMedia('(orientation: portrait)').matches,
        xs: style.getPropertyValue('--xs'),
        sm: style.getPropertyValue('--sm'),
        md: style.getPropertyValue('--md'),
        lg: style.getPropertyValue('--lg'),
        xl: style.getPropertyValue('--xl'),
        xxl: style.getPropertyValue('--xxl')
      }
    }

    useEffect(() => {
      setResize(getResize())
    }, [])

    useEffect(() => {
      window.addEventListener('resize', () => setResize(getResize()))
      return () => {
        window.removeEventListener('resize', () => setResize(getResize()))
      }
    }, [window.innerWidth, window.innerHeight])
  }

  return resize
}

/**
 * useLocation
 */
function useLocation () {
  const getLocation = () => {
    const hashAndQueryString = window.location.hash.split('?')

    const queryString = Object.fromEntries(
      new URLSearchParams(hashAndQueryString[1])
    )

    return {
      hash: hashAndQueryString[0],
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

export { useResize, useLocation }
