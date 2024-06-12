// Home.jsx

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import './Home.css';

function Home() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setProducts(response.data.products.slice(0, 5));
    });
  }, []);

  const handleAddToCart = (product) => {
    const confirmAdd = window.confirm(`Add ${product.title} to the cart?`);

    if (confirmAdd) {
      addToCart(product);
    }
  };

  return (
    <div className="home-container">
      <h2>Home</h2>
      <div className="product-container">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
      <Link to="/cart">
        <Button className="go-to-cart-button">Go to Cart</Button>
      </Link>
    </div>
  );
}

export default Home;
