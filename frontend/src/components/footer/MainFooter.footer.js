import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import '../styles/FooterStyle.footer.css';


function MainFooter() {
  return (
    <footer>
      <div className="footerMain">
        <div>
          <h2 className="footerListTitle">Contacto:</h2>
          <ul className="footerList">
            <li className="footerListItem"><FontAwesomeIcon icon={faInstagram} className="footerListItemIcon" />@aqa.underwater</li>
            <li className="footerListItem"><FontAwesomeIcon icon={faWhatsapp} className="footerListItemIcon" />6441501506</li>
            <li className="footerListItem"><FontAwesomeIcon icon={faEnvelope} className="footerListItemIcon" />aqa.underwater@gmail.com</li>
          </ul>
        </div>
        <div>
          <h2 className="footerListTitle">Horarios de Atención:</h2>
          <ul className="footerList">
            <li className="footerListItem">Lu - Vi: 9am-7pm</li>
            <li className="footerListItem">Sábado: 10am-5pm</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;