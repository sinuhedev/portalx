'use client'

import { flushSync } from 'react-dom'

/**
 * css
 * @param  {...any} classNames
 * @returns
 */
function css (...classNames) {
  return classNames.filter(e => e).reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'string') {
      return accumulator + currentValue + ' '
    } else if (!Array.isArray(currentValue) && typeof currentValue === 'object') {
      for (const e in currentValue) {
        if (currentValue[e]) return accumulator + e + ' '
      }
    }
    return accumulator
  }, '').trim()
}

/**
 * startViewTransition
 * @param {*} fun
 * @param {*} ref
 * @param {*} viewTransitionName
 * @returns
 */
function startViewTransition (
  fun = () => {},
  ref = null,
  viewTransitionName = ''
) {
  if (!document.startViewTransition) return fun()

  ;(async () => {
    if (ref && ref.current) { ref.current.style.viewTransitionName = viewTransitionName }

    await document.startViewTransition(() => flushSync(() => fun())).finished

    if (ref && ref.current) ref.current.style.viewTransitionName = ''
  })()
}

export { css, startViewTransition }
