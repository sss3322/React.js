import React from 'react'
import { useNavigate } from 'react-router-dom'

function Address() {
    const nav=useNavigate()
  return (
    <div>
        <h1 onClick={()=>nav(-1)}>This is address page</h1>
    </div>
  )
}

export default Address