import React, { useState } from 'react'
import PropsChild1 from './PropsChild1'

function PropsParent1() {
    const[count, setCount] =useState(0)
    const increament =() =>{
        setCount(count+1)
    }
  return (
    <div>
    <h1>{count}</h1>
    <PropsChild1 increamentfn={increament}/>
    </div>
  )
}

export default PropsParent1