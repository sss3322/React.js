
import React from 'react';

const PropsChild = ({ peopleArray=[] ,Flowerobj}) => {
  return (
    <div>
     
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Age </th>
            <th>Place </th>
            <th>Flower </th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {peopleArray.map((person) => (
            <tr>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.place}</td>
              <td>{Flowerobj.name}</td>
              <td>{Flowerobj.color}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default PropsChild;
