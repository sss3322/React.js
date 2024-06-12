import React, { useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';

function Mapcard() {
  const [cardData, setCardData] = useState([
    {
      id: 1,
      title: 'Card 1',
      text: 'Some text for Card 1',
      imageSrc: 'https://tse4.mm.bing.net/th?id=OIP.koSZ4SHvAjuH4McTBS1JgQHaFj&pid=Api&P=0&h=180', // Example image URL
    },
    {
      id: 2,
      title: 'Card 2',
      text: 'Some text for Card 2',
      imageSrc: 'https://wallup.net/wp-content/uploads/2019/05/10/683106-rose-flowers-flower-roses-bokeh-landscape-nature-garden.jpg', // Example image URL
    },
    {
      id: 3,
      title: 'Card 3',
      text: 'Some text for Card 3',
      imageSrc: 'https://tse2.mm.bing.net/th?id=OIP.fzGuHRnshEUwL1riEu8J_gHaFj&pid=Api&P=0&h=180',
    },
  ]);

  return (
    <Row>
      {cardData.map((card) => (
        <Card key={card.id} style={{ width: '18rem', marginBottom: '15px' }}>
          <Card.Img variant="top" src={card.imageSrc} alt={`Card ${card.id}`} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default Mapcard;
