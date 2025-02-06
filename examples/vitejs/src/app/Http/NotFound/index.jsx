import React from 'react'
import { css } from 'portalx'
import './style.css'

export default function HttpNotFound ({ name, className, style }) {
  return (
    <main
      className={css(name, className, 'd-flex justify-content-center')}
      style={style}
    >
      <div className='d-flex align-items-center'>
        <div className='d-flex flex-column'>
          <div className='text-center'>
            <h5>Not Found</h5>
          </div>
        </div>
      </div>
    </main>
  )
}
