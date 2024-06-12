import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Maplist() {
  const array = ['zebra', 'giraffe', 'elephant', 'tiger'];

  return (
    <div>
      <ListGroup>
        {array.map((item) => (
          <ListGroup.Item >{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Maplist;
