import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import UseWindowDimensions from '../components/useWindowsDimensions';

const Home = () => {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.body.classList.add('home-background');
    setDisplayWidth(window.innerWidth)


    return () => {
      document.body.classList.remove('home-background');
    };
  },[displayWidth]);

  const Component = () => {
    const { height, width } = UseWindowDimensions();

    return (
      <div>
        width: {width} ~ height: {height}
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {/* <h5>{<Component />}</h5> */}
      <div className="home-main-container">
        <div className="home-left-section">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1 id="space-heading">SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-right-section">
          <a
            className="btn-explore"
            href="https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
