import React from 'react';
import './Navbar2.css';

function Navbar2() {
  return (
    <div className='nav'>
      <div className='section'>
        <ul className="main-menu1">
          <li>
            <label>Our Coffees</label>
          </li>
          <li>
            <label>Recipes</label>
          </li>
          <li>
            <label>Sustainability</label>
          </li>
          <a className="home-link" href="https://www.nescafe.com/in/">
            <img alt="Nescafe logo" className="logo-img" src="https://www.nescafe.com/in/themes/custom/nescafe_design_refresh/LOGO-black_new.svg" />
          </a>
          <ul className='main-menu2'>
          <li className="search-tab">
          <input type="text" className="search-input" placeholder="   search" />
          </li>
          <li className="country-tab">
            <img src="https://cdn-icons-png.flaticon.com/128/3870/3870936.png" className='globe' alt="globe-icon"></img>
          </li>
          <li className="menu-tab">
          <img src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png" className='menu-icon' alt="menu-icon"></img>
          </li>
        </ul>
        </ul>
      </div>
    </div>
  );
}

export default Navbar2;
