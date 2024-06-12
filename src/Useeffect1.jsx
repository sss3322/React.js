import React, { useState, useEffect } from 'react';

function Useeffect1() {
  const [count, setCount] = useState(2);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(count * 2);
    document.title = `mul: ${result}`;
  }, [count, result]);

  const incrementCount = () => {
    setCount(count+1);
  };

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Useeffect1;
