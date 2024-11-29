import { test } from 'vitest'
import { sum, env } from 'util'

test('hi', () => {
  console.info(sum(1, 20))
})

test('env', () => {
  console.info(env.VITE_TITLE)
})
