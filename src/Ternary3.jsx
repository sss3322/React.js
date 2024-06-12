import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Ternary1() {
  const [DarkMode, setDarkMode] = useState(false);

  

  return (
    <div style={{ backgroundColor: DarkMode ? 'black' : 'white' }}>
      <Button onClick={() =>setDarkMode(!DarkMode)}>
        {DarkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  );
}

export default Ternary1;
