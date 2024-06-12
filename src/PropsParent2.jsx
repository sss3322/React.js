import React, { useState } from 'react'
import PropsChild2 from './PropsChild2'

function PropsParent2() {
    const age =25
  return (
    <PropsChild2 Age={age}/>
  )
}

export default PropsParent2