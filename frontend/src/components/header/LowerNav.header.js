import React from 'react';

import '../styles/HeaderStyle.header.css';


function LowerNav() {
  return (
    <>
      <nav>
        <ul className="menu topMenu">
          <li className="topMenuLink"><a href="/#" className="menuLink">Inicio</a></li>
          <li className="topMenuLink"><a href="/signin" className="menuLink">Mi cuenta</a></li>
          <li className="topMenuLink"><a href="/products" className="menuLink">Productos</a></li>
          <li className="topMenuLink"><a href="/#" className="menuLink">Acerca de Nosotros</a></li>
          <li className="topMenuLink"><a href="/#" className="menuLink">Contacto</a></li>
        </ul>
      </nav>
    </>
  );
}

export default LowerNav;