import 'theme/index.css'
import Link from 'next/link'

function Layout ({ children }) {
  return (
    <html>
      <head>
        <title>{process.env.WEB_TITLE}</title>
        <link rel='shortcut icon' href='logo.svg' />
      </head>
      <body className=''>
        <p>ENV: {process.env.NODE_ENV}</p>
        <div>
          <Link href='/'>Home</Link>
          {'   '}
          <Link href='/demo'>Demo</Link>
          {'   '}
          <Link href='/no'>no</Link>
        </div>
        <br />
        {children}
      </body>
    </html>
  )
}

export default Layout
