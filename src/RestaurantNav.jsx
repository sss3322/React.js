import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './RestaurantNav.css';

const RestaurantNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const navLinks = [
    { id: 1, text: 'Menu', href: '#menu' },
    { id: 2, text: 'Reservations', href: '#reservations' },
    { id: 3, text: 'Groups', href: '#groups' },
    { id: 4, text: 'Catering', href: '#catering' },
    { id: 5, text: 'Gift Cards', href: '#gift-cards' },
    { id: 6, text: 'Rewards', href: '#rewards' },
  ];

  return (
    <div>
      <Navbar style={{ backgroundColor: 'black' }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://static.wixstatic.com/media/a560a5_d7ac17ff5c5843c4ab5dff97be0e3c9c~mv2.png/v1/fill/w_69,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bevri%20Logo%20Small%20Transparent.png"
              alt='Bevri Logo'
              className='logo-1'
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <Nav.Link key={link.id} href={link.href}>
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
          {isLoggedIn ? (
            <button className="nav-btn">Logout</button>
          ) : (
            <button className="nav-btn">Login</button>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default RestaurantNav;
