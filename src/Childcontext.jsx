
import React, { useContext } from 'react';
import { Newcontext } from './Maincontext';

const Childcontext = () => {
  const {place,number,obj, placesArray,stateDistrictArray } = useContext(Newcontext);

  return (
    <div>
        <p>Childcontext-Place: {place}</p>
      <p>Childcontext-Number: {number}</p>
      <p>Childcontext-Name: {obj.name}, Age: {obj.age}</p>
      <p>Childcontext-Place 1: {placesArray[0]}</p>
      <p>Childcontext-Place 2: {placesArray[1]}</p>
      <p>Childcontext-Place 3: {placesArray[2]}</p>
      <p>Childcontext-State and District:</p>
    
        {stateDistrictArray.map((item) => (
          <li>
            State: {item.state}, District: {item.district}
          </li>
        ))}
    
    </div>
  );
};

export default Childcontext;
