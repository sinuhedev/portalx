import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import './style.css'

export default ({ className, style }) => {
  const { context } = useFx()
  const { i18n, i18nFile } = context.state

  return (
    <article className={css('Translate-component', className)} style={style}>
      <select
        name='i18n'
        value={i18n}
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
