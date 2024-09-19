import React, { useState } from 'react'
import './Component.css'

const Component1 = () => {
  
  return (
    <>
    <div className='Component_body'>
        <h1 className='componentHead'>This is First Component</h1>
        <p className='ExternalCss'>Design is done by external CSS</p>
        <p style={{color: 'lightpink'}}>This is done by inline CSS</p>
    </div>
    </>
  )
}

export default Component1