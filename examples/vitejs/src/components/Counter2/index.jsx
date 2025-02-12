import { useEffect, useState, flushSync, useRef } from 'react'
import './style.css'
import { startViewTransition, css } from 'portalx'

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
  onChange
}) => {
  const self = useRef()

  return (
    <article
      className={css('Counter2-component', className)}
      style={style}
      name={name}
    >
      <button
        onClick={e => {
          startViewTransition(() => onChange(e), self, 'count2')
        }}
      >
        Increment
      </button>

      <label ref={self}>{value}</label>
    </article>
  )
}
