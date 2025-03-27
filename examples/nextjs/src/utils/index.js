import React, { useEffect, useState } from 'react'

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

async function startViewTransition (fun = () => {}, ref, animation) {
  if (!document.startViewTransition) return fun()

  ref.style.viewTransitionName = animation
  await document.startViewTransition(fun).finished
  ref.style.viewTransitionName = ''
}

function sum (a, b) {
  return a + b
}

export {
  useResize,
  startViewTransition,
  sum
}
