import React from 'react';
import './Sec4.css'; 

const Sec4 = () => {
  return (
    <section className="section4">
    
      <div className="image-section">
        <a href="https://www.bevri.com" target="_self">
          <img
            src="https://static.wixstatic.com/media/a560a5_4a4c686df7ed46b7ac7671d2c0b19599~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1890,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bevri_website_supra.jpg"
            alt="bevri_website_supra.jpg"
            className="image"
          />
        </a>
      </div>

      <div className="text-section">
        <h2 className="section-title1">Georgian Wines</h2>
        <p className="section-text">
          "Georgia uses methods of winemaking that you couldn't invent in the modern world; you could only inherit them through the mists of time…"<br></br> Oz Clarke
        </p>
        <a href="https://www.bevri.com/menu" target="_self" rel="noreferrer noopener" className="shop-now-button">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Sec4;
