import React from 'react'
import { css } from 'portalx'
import Link from 'next/link'
import './style.css'

export default ({ children, href, value = {}, name, className, style, readOnly, disabled }) => {
  return (
    <Link href={{ pathname: href, query: value }} className={css('Link-component', className)} style={style} name={name}>
      {children}
    </Link>
  )
}
