import React, { useEffect, useState, flushSync, useRef } from 'react'
import './style.css'
import { css, startViewTransition } from 'portalx'

export default ({
  children,
  name,
  value,
  type,
  className,
  style,
  readOnly,
  disabled,
  I18n,
  onChange,
  animation = 'count'
}) => {
  const ref = useRef()

  return (
    <article
      className={css('Counter-component', className)}
      style={style}
      name={name}
    >
      <button
        onClick={e => {
          startViewTransition(onChange(e), ref, animation)
        }}
      >
        Increment
      </button>

      <label ref={ref}>{value}</label>
    </article>
  )
}
