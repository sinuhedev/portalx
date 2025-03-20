'use client'

import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import { UserContainer } from 'containers'
import './style.css'

export default function MockapiAndContainer () {
  const { state, fx } = useFx(functions)

  return (
    <section className={css('MockapiAndContainer', '')}>
      MockapiAndContainer
      <UserContainer />
    </section>
  )
}
