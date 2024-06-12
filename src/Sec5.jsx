
import React from 'react';
import './Sec5.css';

const SimpleComponent = () => {
  return (
    <section id="comp-kasu9itd" className="comp-kasu9itd CohWsy wixui-column-strip">
      <div
        id="comp-kasu9iuu"
        className="comp-kasu9iuu YzqVVZ wixui-column-strip__column"
        style={{
          backgroundImage: 'url(https://static.wixstatic.com/media/a560a5_d5dd8070ba8e471db29d9c771f46fd4f~mv2_d_3000_2000_s_2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
        }}
      >
        <div className="mwF7X1">
          <div className="centered-text">
            <h2>Take it home</h2>
            <h1>We Deliver</h1>
          </div>
          <div className="button-container">
            <a href="#delivery" target="_self" rel="noreferrer noopener" className="delivery-button">
              Delivery
            </a>
            <a href="#pickup" target="_self" rel="noreferrer noopener" className="pickup-button">
              Pickup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleComponent;
