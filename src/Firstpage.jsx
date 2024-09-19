import React, { useState } from 'react'
import './Firstpage.css'
import Component1 from './Component1'
import Component2 from './Component2'

const Firstpage = () => {
    const [Compo1,setCompo] = useState(false)
    const [Compo2,setCompo2] = useState(false)
  return (
    <>
    <h1 className='FirstPageHead'>Styling in React using Functional Component</h1>
    <div className='Par-Button'>
        <div className='buttondiv'>
            <button className='Button' onClick={()=>setCompo(!Compo1)}>To see styling in first Functional Component</button>
            {Compo1?<Component1 />:null}
        </div>
        <div className='buttondiv'>
            <button className='Button' onClick={()=>setCompo2(!Compo2)}>To see styling in first Functional Component</button>
            {Compo2?<Component2 />:null}
        </div>
    </div>
    </>
)
}

export default Firstpage