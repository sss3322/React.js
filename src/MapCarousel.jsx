import React from 'react';
import { Carousel } from 'react-bootstrap';

function MapCarousel() {
  const imageArray = [
    'https://tse3.mm.bing.net/th?id=OIP.O70dq7DwHbrkoAyhllh7sgHaE8&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.Os2od9_X9kldrhYdslOxaAHaE8&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.Dm1IWxcbq3jXlaI-4mGdOgHaE7&pid=Api&P=0&h=180',
  ];

  return (
    <div>
      <Carousel >
        {imageArray.map((imageUrl) => (
          <Carousel.Item >
            <img
              src={imageUrl}
              style={{ height: '50vh',width:'100vw', objectFit: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MapCarousel;
