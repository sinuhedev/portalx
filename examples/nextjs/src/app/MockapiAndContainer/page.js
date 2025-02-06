'use client'

import { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { UserContainer } from 'containers'
import { css } from '../../util'
import './style.css'

export default function MockapiAndContainer () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('MockapiAndContainer', '')}>
      MockapiAndContainer
      <UserContainer />
    </main>
  )
}
