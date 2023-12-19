import React, { useState } from 'react';
import HomeDesktop from './HomeDesktop';
import MobileHome from './HomeMobile';

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

const isSmallScreen = windowWidth <= 724;

    return (
        <div className='h-full border'>
            {isSmallScreen ? <MobileHome /> : <HomeDesktop />}
        </div>
    );
};

export default Home;
