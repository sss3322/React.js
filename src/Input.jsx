import React, { useState } from 'react';

function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value); console.log(e); }} />
      </div>
      
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); console.log(e); }} />
      </div>
      
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => { setAge(e.target.value); console.log(e); }} />
      </div>

      <div>
        <label>Place:</label>
        <input type="text" value={place} onChange={(e) => { setPlace(e.target.value); console.log(e); }} />
      </div>
      
      <button onClick={() => { alert("submitted"+ name +place); }}>Submit</button>
    </div>
  );
}

export default Input;
