import React from 'react'

export default ({ children, href, value = {}, ...props }) => {
  value = Object.keys(value).length ? '?' + new URLSearchParams(value).toString() : ''

  return (
    <a href={href + value} {...props}>
      {children}
    </a>
  )
}
