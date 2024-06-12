import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Digital Clock</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DigitalClock;
