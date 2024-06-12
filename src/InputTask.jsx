import React, { useState } from 'react';

function InputTask() {
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
  };

  const letterCount = inputValue.length;
  const wordCount = inputValue.split(" ").filter(word => word !== "").length;

  return (
    <div>
      <label>Type something:</label>
      <input type="text" value={inputValue} onChange={handleChange} />

      <p>Number of Letters: {letterCount}</p>
      <p>Number of Words: {wordCount}</p>

      <button onClick={handleDisplay}>Display Typed Data</button>
      <button onClick={handleClear}>Clear</button>
      <p>Typed Data: {displayedData}</p>
    </div>
  );
}

export default InputTask;
