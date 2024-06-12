import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousel1 = () => {
  return (
    <div>
      <Carousel style={{ maxWidth: '800px', margin: 'auto' }}>
        <Carousel.Item>
          <img
            src='https://wallpapercave.com/wp/wp2896922.jpg'
            alt="img1"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='https://wallup.net/wp-content/uploads/2017/11/17/269227-shoes.jpg'
            alt="img2"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='https://wallpapercave.com/wp/wp2461045.jpg'
            alt="img3"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 >Third slide label</h3>
            <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel1;
