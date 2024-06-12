import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Ternary1() {
  const [showText, setShowText] = useState(false);
return (
    <div>
      {showText ? <h1>This is the text to show</h1> : null}
      <Button onClick={() => setShowText(!showText)}>
        {showText ? 'Hide' : 'Show'}
      </Button>
    </div>
  );
}

export default Ternary1;

