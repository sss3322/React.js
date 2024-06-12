
import React from 'react';
import './Website.css';
import icon1 from './portfolio-folder.png';
import icon2 from './data-management.png';
import icon3 from './line.png';

const Website = () => {
  const maxParagraphWidth = {
    maxWidth: '600px',
    margin:' 0 auto',
    color:'black'
  };
  const maxwidth={
    maxWidth: '200px'
  };

  return (
    <div>
      <div>
        <nav className="custom-navbar">
          <div className="container">
          
            <div className="nav-links">
            <a href="#" style={{ fontSize: '18px', color: 'black' }}>NAME OF THE SITE</a>
            <a href="#home" className="active">HOME</a>
           <a href="#features">SERVICES</a>
              <a href="#pricing">ABOUT</a>
              <a href="#pricing">FEATURES</a>
              <a href="#pricing">CONTACT</a>
            </div>
          </div>
        </nav>
      </div>

      <div className='section1 centered-content'>
        <div className='content'>
          <h1>WELCOME</h1>
          <p style={maxParagraphWidth}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, nulla accusantium tenetur voluptate fugiat,
            magnam laboriosam voluptates possimus.
          </p>
          <button>CONTACT US</button>
        </div>
      </div>

      <div className='section2 centered-content'>
        <div className='service'>
          <h3>Our Services</h3>
          <p style={maxParagraphWidth}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam, distinctio velit exercitationem rerum
            earum.
          </p>
          <div className="icon-container">
            <div className="icon-item">
              <img src={icon2} alt="Icon 1" />
              <h6>Service-1</h6>
              <p style={maxwidth}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum expedita rerum dignissimos reiciendis
              </p>
            </div>
            <div className="icon-item">
              <img src={icon1} alt="Icon 2" />
              <h6>Service-2</h6>
              <p style={maxwidth}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores est quis dolorum inventore
              </p>
            </div>
            <div className="icon-item">
            <img src={icon3} alt="Icon 3" />
              <h6>Service-3</h6>
              <p style={maxwidth}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum unde.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
