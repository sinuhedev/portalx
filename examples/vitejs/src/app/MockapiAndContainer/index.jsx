import React from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { UserContainer } from 'containers'
import { css } from 'util'
import './style.css'

export default function MockapiAndContainer ({ name, className, style }) {
  const { initialState, state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '')} style={style}>
      <UserContainer />
    </main>
  )
}
