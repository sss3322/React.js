import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './RestaurantSec.css';

const RestaurantComponent = () => {
  const carouselImages = [
    'https://static.wixstatic.com/media/a560a5_7e7bc9bca5bc41a8b67f34adb1676e7e~mv2_d_2400_3600_s_4_2.jpg',
    'https://images.pexels.com/photos/2878741/pexels-photo-2878741.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];
  return (
    <section id="restaurant-section" className="restaurant-section">
    <div className="left-half">
      <div className='container'>
        <Carousel>
          {carouselImages.map((image) => (
            <Carousel.Item>
              <img src={image} alt={`Carousel Image`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
      <div className="right-half">
        <div className='container-2'>
          <img
            src="https://static.wixstatic.com/media/a560a5_4b3fce7154594b8fb68a9622e0e5d5f4~mv2.png/v1/fill/w_569,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bevri%20logo.png"
            alt="Logo"
            className="logo"
          />
          <img
            src="https://static.wixstatic.com/media/a560a5_b853391614784564812f6615dcee4971~mv2.png/v1/crop/x_0,y_36,w_2655,h_2656/fill/w_551,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/greens.png"
            alt="Logo2"
            className="logo2"
          />
          <div className='content'>
            <div className="heading">
              <h2>Georgian Food and Wine Experience in San Francisco Bay Area</h2>
            </div>
            <div className="paragraph">
              <p>
                Bevri (which means “a lot” in Georgian) is a Georgian<br/> restaurant, famous for its hot gooey cheese bread<br/> khachapuri, juicy and flavorful dumplings khinkali,<br/>mouth-watering grilled meats and, of course, unique<br/>luscious Georgian wines.
              </p>
              <p>
                Ready to try our satisfying Georgian food and gorgeous wine? Find us in Downtown Palo Alto or Los Altos (reservations recommended) or order delivery.
              </p>
            </div>
            <button className='menu-btn'>Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantComponent;
