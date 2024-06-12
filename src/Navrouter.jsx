import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navrouter() {
  return (
    <div> <Navbar bg="light" data-bs-theme="light">
    <Container>
      
      <Nav className="me-auto">
        <Nav.Link href="#home"><Link to ='/home'>Home</Link></Nav.Link>
        <Nav.Link href="#about"><Link to ='/about'>About</Link></Nav.Link>
        <Nav.Link href="#address"><Link to ='/address'>Address</Link></Nav.Link>
        <Nav.Link href="#features"><Link to ='/features'>Features</Link></Nav.Link>
        <Nav.Link href="#contact"><Link to ='/cart'>Cart</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Navrouter