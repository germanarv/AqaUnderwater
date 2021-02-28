import React from 'react';

import '../styles/Home.home.css';

function CarouselHome() {
  return(
    <>
      <div className="homeCarousel">
        <div className="squareTest">
          <img src={process.env.PUBLIC_URL + '/img/home/PicsArt_07-27-06.46.23.jpg'} alt="PicsArt_07-27-06.46.23" className="homeCarouselItem" />
        </div>
        <div className="squareTest">
        <img src={process.env.PUBLIC_URL + '/img/home/PicsArt_07-19-02.23.34.jpg'} alt="PicsArt_07-19-02.23.34" className="homeCarouselItem" />
        </div>
        <div className="squareTest">
        <img src={process.env.PUBLIC_URL + '/img/home/PicsArt_07-19-02.54.47.jpg'} alt="PicsArt_07-19-02.54.47" className="homeCarouselItem" />
        </div>
        <div className="squareTest">
        <img src={process.env.PUBLIC_URL + '/img/home/PicsArt_07-19-12.22.22.jpg'} alt="PicsArt_07-19-12.22.22" className="homeCarouselItem" />
        </div>
      </div>
    </>
  )
}

export default CarouselHome;