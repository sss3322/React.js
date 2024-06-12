import React, { useState } from 'react'
import { Button } from 'react-bootstrap';


function Ternary1() {
    const[showText, setshowText]=useState(false);
  return (
    <div>
        {showText?<h1>This is the text to show</h1>:" "}
        <Button onClick={() => setshowText(!showText)}>Change</Button>
    </div>
  )
}

export default Ternary1;