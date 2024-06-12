
import React, { createContext } from 'react';
import Childcontext from './Childcontext';
import Childcontext2 from './Childcontext2';

export const Newcontext = createContext();

const Maincontext = () => {
  let place = "Kerala";
  let number = 36;
  let obj = { name: 'Anna', age: 24 };
  let placesArray = ['Palakkad', 'Calicut', 'Malappuram'];
  let stateDistrictArray = [
    { state: 'Kerala', district: 'Trivandrum' },
    { state: 'Kerala', district: 'Kochi' },
    { state: 'Tamil Nadu', district: 'Chennai' }
  ];

  return (
    <div>
      <Newcontext.Provider value={{ place, number, obj, placesArray, stateDistrictArray }}>
        <Childcontext />
        <Childcontext2 />
      </Newcontext.Provider>
    </div>
  );
};

export default Maincontext;
