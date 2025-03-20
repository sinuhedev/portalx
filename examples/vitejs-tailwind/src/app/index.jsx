import React from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import { Button } from 'components'
import './style.css'

export default function App () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('App', 'container m-5')}>

      <div>
        <Button onClick={e => fx.increment(e)}>+</Button>
        <Button onClick={e => fx.decrement(e)}>-</Button>
      </div>

      <div style={{ display: 'flex' }}>
        <pre style={{ margin: '0 50px 0 50px' }}>
          state = {JSON.stringify(state, undefined, 2)}
        </pre>
      </div>

      <div>
        <section>CSS @container </section>

        <ul>
          <li className='landscape'>landscape</li>
          <li className='portrait'>portrait</li>
          <li><br /></li>
          <li className='screen-xs'>XS</li>
          <li className='screen-sm'>SM</li>
          <li className='screen-md'>MD</li>
          <li className='screen-lg'>LG</li>
          <li className='screen-xl'>XL</li>
          <li className='screen-2xl'>2XL</li>
        </ul>

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
