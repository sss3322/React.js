import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Card, Button } from 'react-bootstrap';

function Axios5() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
    })
    .catch(()=>
    {
      console.log(response.error)
    })
  }, []);

 
  const firstFiveCards = products.slice(0, 5);

  return (
    <Row style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '-20px' }}>
      {firstFiveCards.map((product) => (
        <Card key={product.id} style={{ width: '18rem', margin: '15px' }}>
          <Card.Img
            style={{ height: '200px', objectFit: 'cover' }}
            variant="top"
            src={product.thumbnail}
            alt={product.title}
          />
          <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Card.Text>Discount: {product.discountPercentage}%</Card.Text>
            <Card.Text>Rating: {product.rating}</Card.Text>
            <Card.Text>Stock: {product.stock}</Card.Text>
            <Card.Text>Brand: {product.brand}</Card.Text>
            <Card.Text>Category: {product.category}</Card.Text>
            <Button variant="primary" style={{ marginTop: 'auto' }}>Buy now</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default Axios5;
