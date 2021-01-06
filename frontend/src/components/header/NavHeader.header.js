import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import HambMenu from './HambMenu.header';
import '../styles/HeaderStyle.header.css';


function NavHeader() {
  return (
    <header>
      <div className="upperNav">
        <HambMenu />
        <a href="/" className="logoLink"><img src={process.env.PUBLIC_URL + '/img/logo/logo.jpg'} alt="Logo" className="logo" /></a>
        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
      </div>
    </header>
  );
}

export default NavHeader;