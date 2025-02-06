import React from 'react'
import './style.css'
import { css } from 'util'

export default ({ children, href, value = {}, name, className, style, readOnly, disabled }) => {
  value = Object.keys(value).length ? '?' + new URLSearchParams(value).toString() : ''

  return (
    <a href={href + value} className={css('Link-component', className)} style={style} name={name}>
      {children}
    </a>
  )
}
