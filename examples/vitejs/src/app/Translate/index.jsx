import React from 'react'
import functions from './functions'
import { useFx } from 'portalx'
import './style.css'
import { I18n } from 'components'
import { css } from 'util'

export default function Translate ({ name, className, style }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '')} style={style}>
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
