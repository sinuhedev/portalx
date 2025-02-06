'use client'

import { useEffect } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import { I18n } from 'components'
import { css } from 'utils'
import './style.css'

export default function Translate () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('Translate', '')}>
      <I18n value='page.name' args={['Sinuhe', 'Maceda', 'Bouchan']} />

      <ul>
        <li>
          <I18n value='ui.ok' />
        </li>
        <li>
          <I18n value='ui.back' />
        </li>
        <li>
          <I18n value='page.user.family' />
        </li>
        <li>
          <I18n value='page.module.block.docker' />
        </li>
      </ul>
    </main>
  )
}
