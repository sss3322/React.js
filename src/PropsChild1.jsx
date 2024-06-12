import React from 'react'
import { Button } from 'react-bootstrap'

function PropsChild1({increamentfn}) {
  return (
    <Button onClick={increamentfn}>count</Button>
  )
}

export default PropsChild1