import { test } from 'vitest'
import { sum, env } from 'utils'

let a

test('hi', () => {
  console.info(sum(1, 20))
})

test('env', () => {
  console.info(env.WEB_TITLE)
})
