'use client'

import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'
import { useResize } from 'utils'

export default function MediaQuery () {
  const { state, fx } = useFx(functions)
  const resize = useResize()

  return (
    <section className={css('MediaQuery', '')}>
      MediaQuery

      <div>
        <section>CSS @container </section>

        <ul className='css-container'>
          <li className='landscape'>landscape</li>
          <li className='portrait'>portrait</li>
          <li className='xs'>XS</li>
          <li className='sm'>SM</li>
          <li className='md'>MD</li>
          <li className='lg'>LG</li>
          <li className='xl'>XL</li>
          <li className='xxl'>XXL</li>
        </ul>

        <pre style={{ margin: '0 50px 0 50px', width: '250px' }}>
          state = {JSON.stringify(resize, undefined, 2)}
        </pre>

      </div>

    </section>
  )
}
