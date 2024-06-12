import React, { useState } from 'react';

function InputTask1() {
  const [inputValue, setInputValue] = useState("");
  const [displayedData, setDisplayedData] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleDisplay = () => {
    setDisplayedData(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    setDisplayedData("");
  };

  return (
    <div>
      <label>Type something:</label>
      <input type="text" value={inputValue} onChange={handleChange} />

      <p>Input Data: {inputValue}</p>
      <p>Displayed Data: {displayedData}</p>

      <button onClick={handleDisplay}>Display Typed Data</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default InputTask1;
