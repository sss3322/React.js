import React from 'react';
import './Sec3.css';
const Sec3 = () => {
  return (
    <section className="main-section">
      <div className="flex-container">
        <div className="content-section">
          <h2 className="section-title">Georgia</h2>
          <p className="section-text">
            Georgia (Sakartvelo), a country at the intersection of Europe and Asia, is resting high in the Caucasus mountains. It lays on the shore of the Black Sea, between Turkey and Russia. Thanks to its location, Georgia has been influenced by a variety of eastern and western civilizations, resulting in a unique cultural heritage.
          </p>
          <a href="https://en.wikipedia.org/wiki/Georgia_(country)" target="_self" className="read-more-button">
            Read More
          </a>
        </div>

       
        <div className="google-map-section">
          <iframe
            title="Google Maps"
            aria-label="Google Maps"
            width="100%"
            height="100%"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303406.75779168087!2d44.197127379989!3d41.720153096785476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030f3d8e227b23b%3A0x53c504479b5fcc!2sGeorgia!5e0!3m2!1sen!2sus!4v1605274042330!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
