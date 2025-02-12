'use client'

import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import { UserContainer } from 'containers'
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
