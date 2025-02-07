import React, { useEffect, useState } from 'react'
import { useFx } from 'portalx'
import functions from './functions'
import './style.css'
import { css } from 'utils'

export default function MediaQuery ({ className, style, resize }) {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('MediaQuery', className, '')} style={style}>
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

      <div className='container text-center'>
        <div className='row'>
          <div className='col-6'>col-6</div>
          <div className='col-6'>col-6</div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className='container text-center'>
        <div className='row'>
          <div className='col-sm-6'>col-sm-6</div>
          <div className='col-sm-6'>col-sm-6</div>
        </div>
      </div>

    </main>
  )
}
