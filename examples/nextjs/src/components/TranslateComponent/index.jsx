import React, { useEffect } from 'react'
import './style.css'
import { css } from 'portalx'
import { I18n } from 'components'

export default ({ children, name, value, type, className, style, readOnly, disabled, onClick = () => {} }) => {
  return (
    <article className={css('TranslateComponent-component', className)} style={style} name={name}>
      TranslateComponent-component : <span><I18n value='page.user.family' /></span>
    </article>
  )
}
