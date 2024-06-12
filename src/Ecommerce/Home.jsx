

import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Navbar, Container, Nav, FormControl, InputGroup, Carousel } from 'react-bootstrap';
import { CartContext } from './CartContext';
import './Home.css';

function Home() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setProducts(response.data.products.slice(0, 12));
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
            <NavLink to="/cart" className="nav-link" activeClassName="active">Cart</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </Nav>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Container>
      </Navbar>

      {searchTerm === '' ? (
        <Carousel style={{ width: '90%', margin: 'auto' }}>
          <Carousel.Item>
            <img src='https://dixplore.com/wp-content/uploads/2020/03/ugztxggoyfvew2pptewkti.jpg' style={{ width: '100%', height: '600px', objectFit: 'cover' }} alt='carousel-item' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.dekhnews.com/wp-content/uploads/2020/11/Apple-Foldable-iPhone-Release-Date-Images.jpg' style={{ width: '100%', height: '600px', objectFit: 'cover' }} alt='carousel-item' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='http://i.huffpost.com/gen/1105939/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg' style={{ width: '100%', height: '600px', objectFit: 'cover' }} alt='carousel-item' />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : null}

      <div className="home-container">
        {searchTerm === '' ? (
          <h2 className="side-heading">Products</h2>
        ) : null}
        <div className="product-container">
          {filteredProducts.map((product, index) => (
            <Card key={product.id} className="product-card" style={{ marginLeft: '30px' }}>
              <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="info" className="details-button">
                    Details
                  </Button>
                </Link>
                <Button variant="primary" onClick={() => handleAddToCart(product)} className="add-to-cart-button">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
