
import React from 'react';

function Propschild3(props) {
 
  console.log( props);
  // console.log(props.val3);

  return (
    <div>
      {/* <p>Place: {props.val}</p>
      <p>Number: {props.val1}</p> */}
       <p>{props.val2.name}</p>
      <p>{props.val2.age}</p> 
{/*        */}
       <p>Array of Places:</p>
      <ul>
        {props.val3.map((item) => (
          <li>
            State: {item.state}, City: {item.city}
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default Propschild3;
