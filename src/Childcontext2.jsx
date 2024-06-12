import React, { useContext } from 'react'
import { Newcontext } from './Maincontext'

const Childcontext2 = () => {
    const { place, number } = useContext(Newcontext);
  return (
    <div><p>Childcontext2 - Place: {place}</p>
     <p>Childcontext2 - Number: {number}</p></div>
  )
}

export default Childcontext2