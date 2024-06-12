import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Usestate5() {
  const [person, setPerson] = useState({ name: 'John', age: 25 });

  const Age = () => {
    setPerson(prevPerson => {
      return { name: prevPerson.name, age: prevPerson.age + 1 };
    });
  };

  return (
    <div>
      <h1>{`Name: ${person.name}, Age: ${person.age}`}</h1>
      <Button onClick={Age}>Change</Button>
    </div>
  );
}

export default Usestate5;
