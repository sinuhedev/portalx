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
        value={window.localStorage.getItem('i18n') ?? context.state.i18n}
        onChange={e => {
          context.fx.change(e)
          window.localStorage.setItem('i18n', e.target.value)
        }}
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
