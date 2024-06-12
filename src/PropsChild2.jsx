import React from 'react'

function PropsChild2({Age}) {
   
  return (
    <div>
        <h1>{Age}</h1>
        <h2>{Age <= 18? "minor": "major"}</h2>
    </div>
  )
}

export default PropsChild2