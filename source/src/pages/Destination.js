import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import testPNG from '../assets/test.png';
import dataPlanets from '../planetsData';

const Destination = () => {
  const [planetDataSet, setPlanetDataSet] = useState(dataPlanets);
  const [count, setCount] = useState(0);

  function togglePlanet(e) {
    switch (e) {
      case e:
        setCount(e);
        break;
      default:
        break;
    }
  }

  const planetButtons = planetDataSet.map((item) => (
    <button className='planet-button' onClick={() => togglePlanet(item.id)} key={item.id}>
      {item.name}
    </button>
  ));

  useEffect(() => {
    document.body.classList.add('destination-background');

    return () => {
      document.body.classList.remove('destination-background');
    };
  });

  return (
    <div>
      <NavBar />
      <main className="main-planet-holder">
        <div className="main-container-left">
          <h1><span className="grey-text">01</span> PICK YOUR DESTINATION</h1>
          <img className='planet-img' src={planetDataSet[count].img} alt="planet" />
        </div>
        <div className="main-container-right planet-description">
          <section>{planetButtons}</section>
          <h1 className='planet-heading'>{planetDataSet[count].name}</h1>
          <div className='mycontainer-paragraph'>
          <p className='destination-paragraph'>{planetDataSet[count].description}</p>

          </div>
          <nav className="planet-navigation">
            <div className="planet-info">
            <h2 className='planet-info-heading'>AVG. DISTANCE</h2>
            <p className='planet-travel-time'>{planetDataSet[count].avgDistance}</p>
            </div>
            <div className="planet-info">
            <h2 className="planet-info-heading">EST. TRAVEL TIME</h2>
            
            <p className='planet-travel-time'>{planetDataSet[count].estTravelTime}</p>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Destination;
