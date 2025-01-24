import React from 'react'
import iconSvg from 'assets/icon/index.svg'

export default ({
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
    <use href={`${iconSvg}#${value}`} />
  </svg>
)
