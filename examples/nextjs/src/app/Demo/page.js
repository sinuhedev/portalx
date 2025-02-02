'use client'

import './style.css'

export default function Demo () {
  function onClick () {
    console.info('onclick')
  }

  return (
    <div className='demo'>
      <div>....Demo....</div>

      <h1>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>

      <button onClick={onClick}>hola</button>

      <p className='dem'>hola</p>
    </div>
  )
}
