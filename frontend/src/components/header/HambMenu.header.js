import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/HeaderStyle.header.css';


class HambMenu extends Component {

  clickMenu = () => {
    document.getElementById("sideMenu").classList.toggle("menu-open")
    document.getElementById("menuLines").classList.toggle("hidden")
    document.getElementById("menuTimes").classList.toggle("hidden")
  }

  render() {  

    return (
      <nav className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="menuIcon" id="menuLines" onClick={this.clickMenu} />
        <FontAwesomeIcon icon={faTimes} className="menuIcon close hidden" id="menuTimes" onClick={this.clickMenu} />
        <ul id="sideMenu" className="menu sideMenu">
          <li><a href="/" className="menuLink">INICIO</a></li>
          <li><a href="/signin" className="menuLink">MI CUENTA</a></li>
          <li><a href="/products" className="menuLink">COLECCION</a></li>
          <li><a href="/#" className="menuLink">TAMAÑOS</a></li>
          <li><a href="/#" className="menuLink">COLORES</a></li>
          <li><a href="/#" className="menuLink">CONTACTO</a></li>
        </ul>
      </nav>
    );
  }
}

export default HambMenu;