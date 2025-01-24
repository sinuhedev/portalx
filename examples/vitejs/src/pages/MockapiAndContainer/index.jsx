import React from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import { UserContainer } from 'containers'
import './style.css'

const MockapiAndContainer = ({ name, className, style }) => {
  const { initialState, state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '')} style={style}>
      <UserContainer />
    </main>
  )
}

export default MockapiAndContainer
