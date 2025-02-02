import React, { useEffect, useState } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default function MediaQuery ({ name, className, style, resize }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '')} style={style}>
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

      <div>
        <pre style={{ margin: '0 50px 0 50px' }}>
          resize = {JSON.stringify(resize, undefined, 2)}
        </pre>
      </div>

      <br />
      <br />
      <br />

      <div className='grid grid-cols-12'>
        <div className='col-span-6'>col-span-6</div>
        <div className='col-span-6'>col-span-6</div>
      </div>

      <br />
      <br />
      <br />

      <div className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-6'>col-span-12 md:col-span-6</div>
        <div className='col-span-12 md:col-span-6'>col-span-12 md:col-span-6</div>
      </div>

    </main>
  )
}
