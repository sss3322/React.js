import React from 'react';
import Figure from 'react-bootstrap/Figure';
import './ResSec2.css';

const figureData = [
  {
    alt: 'Image 1',
    src: 'https://static.wixstatic.com/media/a560a5_7e7bc9bca5bc41a8b67f34adb1676e7e~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_476,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bevri_website_gift_card.jpg',
    caption: 'Menu',
  },
  {
    alt: 'Image 2',
    src: 'https://static.wixstatic.com/media/a560a5_433372453339404ebb21fd73cb6083ad~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_476,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bevri_website_gift_card2.jpg',
    caption: 'Store',
  },
  {
    alt: 'Image 3',
    src: 'https://static.wixstatic.com/media/a560a5_a0ce25551b654359947482c3688ba1a0~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_476,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bevri_website_lunch_and_dinner.jpg',
    caption: 'Catering',
  },
];

function Sec2() {
  return (
    <div>
      <h2 className="section-heading">Discover Georgian Cuisine</h2>
      <div className='row justify-content-center'>
        {figureData.map((figure, index) => (
          <div key={index} className="col-md-4">
            <Figure>
              <Figure.Image
                alt={figure.alt}
                src={figure.src}
              />
              <Figure.Caption>
                {figure.caption}
              </Figure.Caption>
            </Figure>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="book-table-btn">Book a Table</button>
      </div>
    </div>
  );
}

export default Sec2;
