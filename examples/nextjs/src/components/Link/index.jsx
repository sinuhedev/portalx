import React from 'react'
import Link from 'next/link'

export default ({ children, href, value = {}, ...props }) => (
  <Link href={{ pathname: href, query: value }} {...props}>
    {children}
  </Link>
)
