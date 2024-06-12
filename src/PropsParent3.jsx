import React, { useState } from 'react'
import Propschild3 from './Propschild3'

function PropsParent3() {
  const [place,setPlace]=useState("Kerala")
  const[number,setNumber]=useState(56)
  const[obj,setObj]=useState({name:"suchithra",age:"21"});
  const[array,seArray]=useState([{state:"Kerala",city:"Trivandrum"},{state:"TamilNadu",city:"Chennai"}])
  return (
    <div>
      <Propschild3 val={place} val1={number} val2={obj} val3={array}/>
    </div>
  )
}

export default PropsParent3

