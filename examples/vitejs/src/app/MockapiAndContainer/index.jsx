import React from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { UserContainer } from 'containers'
import { css } from 'utils'
import './style.css'

export default function MockapiAndContainer ({ className, style }) {
  const { initialState, state, fx } = useFx(functions)

  return (
    <main className={css('MockapiAndContainer', className, '')} style={style}>
      <UserContainer />
    </main>
  )
}
