import React from 'react'
import { useFx, i18n, css } from 'portalx'
import i18nFile from 'assets/i18n'
import './style.css'

const I18n = ({ value, args = [] }) => {
  const { context } = useFx()
  return i18n(value, args, i18nFile, context.state.i18n)
}

const Translate = ({ className, style }) => {
  const { context } = useFx()

  return (
    <article className={css('Translate-component', className)} style={style}>
      <select
        name='i18n'
        value={context.state.i18n}
        onChange={e => context.fx.changeI18n(e)}
      >
        {i18nFile.locales.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </article>
  )
}

export { I18n, Translate }
