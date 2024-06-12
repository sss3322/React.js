import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usestate1() {

    const [first, setfirst] = useState("hai")
    const sample=()=>{
        setfirst("hello")
    }
  return (
    <div>
        <h1>{first}</h1>
        <Button onClick={sample}>change</Button>
    </div>
  )
}

export default Usestate1