import React, { useState } from 'react';

function SpreadOp2() {
  const [array, setArray] = useState([
    { name: 'john', age: 26 },
    { name: 'david', age: 20 },
  ]);

  const newarray = [{ name: 'alex', age: 25 }];
  const obj ={name:'alen',age:23}

  const addarray = () => {
    setArray([...array, ...newarray]);
  };
  const addobj= () =>{
    setArray([...array,obj])
  }
  return (
    <div>
      <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        <tbody>
          {array.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addarray}>Add newarray</button>
      <button onClick={addobj}>Add object</button>
    </div>
  );
}

export default SpreadOp2;
