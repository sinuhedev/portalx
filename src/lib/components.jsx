'use client'

import React from 'react'
import { useFx } from './useFx'

/***
 * I18n
 */
const I18n = ({ value, args = [] }) => {
  if (!value) return ''

  const { context } = useFx()
  const { i18n, i18nFile } = context.state

  const locale = i18nFile.locales.includes(i18n) ? i18n : i18nFile.defaultLocale
  const localeIndex = i18nFile.locales.indexOf(locale)

  try {
    let text = value.split('.').reduce((ac, el) => ac[el], i18nFile)
    text = text[localeIndex]

    if (args) {
      text = text.replace(
        /([{}])\\1|[{](.*?)(?:!(.+?))?[}]/g,
        (match, literal, number) => args[number] || match
      )
    }

    return text
  } catch (e) {
    console.error('Error in [il8n] => ' + value)
    return value
  }
}

/***
 * Link
 */
const Link = ({ children, href, value = {}, name, className, style, readOnly, disabled }) => {
  value = Object.keys(value).length ? '?' + new URLSearchParams(value).toString() : ''

  return (
    <a href={href + value} name={name} className={className} style={style} readOnly={readOnly} disabled={disabled}>
      {children}
    </a>
  )
}

/**
 * Icon
 */
const Icon = ({
  value,
  className = '',
  style = {},
  width,
  height,
  size = 16,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  children
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    style={style}
    width={width ?? size}
    height={height ?? size}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    {...children}
  >
    <use href={`#${value}`} />
  </svg>
)

export {
  I18n,
  Link,
  Icon
}
