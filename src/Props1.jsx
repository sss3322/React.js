import React, { useState } from 'react'
import Child1 from './Child1';

const Props1 = () => {
    const[object,setObject]=useState({name: "suchithra",age:"21"});
  return (
    <div>
        <Child1 obj={object}/>
    </div>
  )
}

export default Props1