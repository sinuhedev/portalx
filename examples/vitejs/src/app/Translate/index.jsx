import React, { useEffect } from 'react'
import functions from './functions'
import { useFx, css } from 'portalx'
import './style.css'
import { I18n } from 'components'

export default function Translate ({ className, style }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('Translate', className, '')} style={style}>
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
