import React, { useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';

const Card33 = () => {
  const [isAlternate, setIsAlternate] = useState(false);

  const handleButtonClick = () => {
    setIsAlternate(!isAlternate);
  };

  const handleDoubleClick = () => {
    setIsAlternate(false);
  };

  const Image = () => {
    return isAlternate? 'https://wallup.net/wp-content/uploads/2019/05/10/683106-rose-flowers-flower-roses-bokeh-landscape-nature-garden.jpg': 'https://tse2.mm.bing.net/th?id=OIP.fzGuHRnshEUwL1riEu8J_gHaFj&pid=Api&P=0&h=180';
  };

  const Title = () => {
    return isAlternate ? 'Title of second flower.' : 'Title of first flower.';
  };

  const Content = () => {
    return isAlternate ? 'Content of second flower.' : 'Content of first flower.';
  };

  return (
    <Row>
      <Card style={{ width: '18rem' }} onDoubleClick={handleDoubleClick}>
        <Card.Img variant="top" src={Image()} />
        <Card.Body>
          <Card.Title>{Title()}</Card.Title>
          <Card.Text>{Content()}</Card.Text>
          <Button variant="primary" onClick={handleButtonClick}>
            Change 
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Card33;
