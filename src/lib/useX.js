import { useState, useEffect } from 'react'

/**
 * useResize
 * @param {*} MAX
 * @returns
 */
function useResize () {
  const getResize = () => {
    const root = window.getComputedStyle(document.documentElement)
    const MAX = {
      SM: root.getPropertyValue('--mediaquery-sm') || '768',
      MD: root.getPropertyValue('--mediaquery-md') || '992',
      LG: root.getPropertyValue('--mediaquery-lg') || '1200',
      XL: root.getPropertyValue('--mediaquery-xl') || '1400'
    }

    const self = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: null,
      landscape: false,
      portrait: false,
      device: null,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false
    }

    // orientation
    if (window.matchMedia('(orientation: landscape)').matches) {
      self.orientation = 'landscape'
      self.landscape = true
    } else if (window.matchMedia('(orientation: portrait)').matches) {
      self.orientation = 'portrait'
      self.portrait = true
    }

    // small devices
    if (window.matchMedia(`( width < ${MAX.SM}px )`).matches) {
      self.device = 'SM'
      self.sm = true
    } else if (
      // medium devices
      window.matchMedia(`( ${MAX.SM}px <= width < ${MAX.MD}px )`).matches
    ) {
      self.device = 'MD'
      self.md = true
    } else if (
      // large devices
      window.matchMedia(`( ${MAX.MD}px <= width < ${MAX.LG}px )`).matches
    ) {
      self.device = 'LG'
      self.lg = true
    } else if (
      // extra large devices
      window.matchMedia(`( ${MAX.LG}px <= width < ${MAX.XL}px )`).matches
    ) {
      self.device = 'XL'
      self.xl = true
    } else if (window.matchMedia(`( ${MAX.XL}px <= width )`).matches) {
      // extra extra large devices and up
      self.device = 'XXL'
      self.xxl = true
    }

    return self
  }

  const [resize, setResize] = useState(getResize())

  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty('--mq-landscape', resize.landscape)
    root.style.setProperty('--mq-portrait', resize.portrait)
    root.style.setProperty('--mq-sm', resize.sm)
    root.style.setProperty('--mq-md', resize.md)
    root.style.setProperty('--mq-lg', resize.lg)
    root.style.setProperty('--mq-xl', resize.xl)
    root.style.setProperty('--mq-xxl', resize.xxl)
  }, [resize.orientation, resize.device])

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
