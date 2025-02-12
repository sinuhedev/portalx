import { test } from 'vitest'
import { env } from 'portalx'

test('env', () => {
  console.info(env.WEB_TITLE)
})
