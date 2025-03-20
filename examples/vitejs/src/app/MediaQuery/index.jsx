import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function MediaQuery () {
  const { state, fx } = useFx(functions)

  return (
    <section className={css('MediaQuery', '')}>
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

      </div>

    </section>
  )
}
