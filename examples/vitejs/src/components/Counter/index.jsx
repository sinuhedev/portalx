import { useRef } from 'react'
import './style.css'
import { css } from 'portalx'
import { startViewTransition } from 'utils'

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
  animation = 'count',
  onChange
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
          startViewTransition(onChange(e), ref.current, animation)
        }}
      >
        Increment
      </button>

      <label ref={ref}>{value}</label>
    </article>
  )
}
