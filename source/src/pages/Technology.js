import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import testPNG from '../assets/test.png';
import technology from '../techData';

const Technology = () => {
  const [techCounter, setTechCounter] = useState(0);
  const [techData, setTechData] = useState(technology);

  const toggleTechnology = (id) => {
    setTechCounter(id);
  };

  const technologyBTN = techData.map((element) => (
    <div className='button-inside' key={element.id}>
      <button className="tech-btn" onClick={() => toggleTechnology(element.id)}>
        {element.id}
      </button>
    </div>
  ));

  useEffect(() => {
    document.body.classList.add('technology-background');

    return () => {
      document.body.classList.remove('technology-background');
    };
  });

  return (
    <div>
      <NavBar />
      <div className='main-planet-holder fix1'>
      <h2 className='tech-tech-title'>
            <span className="grey-text">03</span>THE TECHNOLOGY...
          </h2>

      </div>
      <main className="main-planet-holder">
        <section className="tech-side-left">
          <div className="tech-container">{technologyBTN}</div>
          <div className="tech-info">
            <h2 className="tech-subtitle">THE TERMINOLOGY…</h2>
            <h1 className="tech-title">{techData[techCounter].name}</h1>
            <div className='mycontainer-paragraph'>
            <p id='awesomeID' className='tech-description'>{techData[techCounter].description}</p>

            </div>
          </div>
        </section>
        <section className="tech-side-right">
          <div className="just-div">
            <img className='technology-img' src={techData[techCounter].img} alt="fun test img" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;
