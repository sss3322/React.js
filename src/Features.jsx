import React from 'react'
import { useNavigate } from 'react-router-dom'

function Features() {
    const nav=useNavigate()
  return (
    <div>
        <h1 onClick={()=>nav(-2)}>This is Features page</h1>
    </div>
  )
}

export default Features