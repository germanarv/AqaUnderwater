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
        <ul id="sideMenu" className="menu">
          <li><a href="/" className="menuLink">Inicio</a></li>
          <li><a href="/signin" className="menuLink">Mi cuenta</a></li>
          <li><a href="/products" className="menuLink">Productos</a></li>
          <li><a href="/#" className="menuLink">Acerca de Nosotros</a></li>
          <li><a href="/#" className="menuLink">Contacto</a></li>
        </ul>
      </nav>
    );
  }
}

export default HambMenu;