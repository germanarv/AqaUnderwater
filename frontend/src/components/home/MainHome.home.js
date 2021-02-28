import React from 'react';

import CarouselHome from './Carousel.home';
import '../styles/Home.home.css';


function MainHome() {
  return (
    <>
      <main>
        <div className="oceanUpperDiv">
          <p className="homeTitle">new collection</p>
          <CarouselHome />
          <p className="homeQuote">Porque nuestra prioridad es que te sientas segura de ti misma en AQA manejamos diseños personalizados</p>
          <img src={process.env.PUBLIC_URL + '/img/home/ocean_background.jfif'} alt="ocean" className="oceanUpper" />
        </div>
        {/* <div className="oceanLowerDiv">
          <img src={process.env.PUBLIC_URL + '/img/home/ocean_lower.jpg'} alt="ocean" className="oceanLower" />
        </div> */}
      </main>
    </>
  )
}

export default MainHome;