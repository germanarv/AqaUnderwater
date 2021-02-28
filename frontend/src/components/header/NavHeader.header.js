import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import HambMenu from './HambMenu.header';
import UpperNav from './UpperNav.header';
import '../styles/HeaderStyle.header.css';


function NavHeader() {
  return (
    <header>
      <div className="upperNavDiv">
        <HambMenu />
        <UpperNav />
        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
      </div>
      <div className="logoDiv">
        <a href="/" className="logoLink"><img src={process.env.PUBLIC_URL + '/img/logo/logo.jpg'} alt="Logo" className="logo" /></a>
      </div>
      <div className="lowerNav">
        
      </div>
    </header>
  );
}

export default NavHeader;