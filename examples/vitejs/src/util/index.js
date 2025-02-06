import { useResize, useLocation } from './useX'
import { css, startViewTransition } from './util'

const env = import.meta.env

function sum (a, b) {
  return a + b
}

export {
  useResize, useLocation,
  css, startViewTransition,
  env,
  sum
}
