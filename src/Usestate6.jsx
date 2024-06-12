import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Usestate6() {
  const [text, setText] = useState('Text color is Black');

  return (
    <div>
      <h1 style={{ color: 'black' }}>{text}</h1>
      <Button style={{ backgroundColor: 'red' }} onClick={() => setText('Text color is Red')}>
        Red
      </Button>
      <Button style={{ backgroundColor: 'yellow' }} onClick={() => setText('Text color is Yellow')}>
        Yellow
      </Button>
      <Button style={{ backgroundColor: 'green' }} onClick={() => setText('Text color is Green')}>
        Green
      </Button>
      <Button style={{ backgroundColor: 'brown' }} onClick={() => setText('Text color is Brown')}>
        Brown
      </Button>
    </div>
  );
}

export default Usestate6;
