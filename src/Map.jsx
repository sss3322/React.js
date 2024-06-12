import React, { useState } from 'react'

function Map() {
    const [array ,setarray] = useState([{name:"Clara",age:"25"},{name:"John", age:"21"},{name:"Aleena",age:"22"}])
  return (
    <div>
        {array.map((display) =>
        <h1>{display.name} {display.age}</h1>
        )}
    </div>
  )
}

export default Map