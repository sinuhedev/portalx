import React, { useEffect } from 'react'
import './style.css'
import { css, I18n } from 'portalx'

export default ({ children, name, value, type, className, style, readOnly, disabled, onClick = () => {} }) => {
  return (
    <article className={css('TranslateComponent-component', className)} style={style} name={name}>
      TranslateComponent-component : <span><I18n value='page.user.family' /></span>
    </article>
  )
}
