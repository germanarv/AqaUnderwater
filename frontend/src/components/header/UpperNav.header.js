import React from 'react';

import '../styles/HeaderStyle.header.css';


function UpperNav() {
  return (
    <>
      <nav className="upperNav">
        <ul className="menu">
          <li className="topMenuLink topMenuHome"><a href="/#" className="menuLink">INICIO</a></li>
          <li className="topMenuLink"><a href="/signin" className="menuLink">MI CUENTA</a></li>
          <li className="topMenuLink"><a href="/products" className="menuLink">COLECCION</a></li>
          <li className="topMenuLink"><a href="/#" className="menuLink">TAMAÑOS</a></li>
          <li className="topMenuLink"><a href="/#" className="menuLink">COLORES</a></li>
          <li className="topMenuLink topMenuLast"><a href="/#" className="menuLink">CONTACTO</a></li>
        </ul>
      </nav>
    </>
  );
}

export default UpperNav;