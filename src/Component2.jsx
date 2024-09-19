import React from 'react'
import './Component.css'


const Component2 = () => {
  return (
    <>
    <div className='Component_body'>
        <h1 className='componentHead'>This is Second Component</h1>
        <p className='ExternalCss'>Design is done by external CSS</p>
        <p style={{color: 'lightcyan'}}>This is done by inline CSS</p>
    </div>
    </>
  )
}

export default Component2