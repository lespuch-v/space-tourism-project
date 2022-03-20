import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import crewData from '../crewData';
import testImg from '../assets/test.png';

const Crew = () => {
  // TODO: set state for crew data
  const [newCrewData, setNewCrewData] = useState(crewData);
  const [crewId, setCrewId] = useState(0);

  useEffect(() => {
    document.body.classList.add('crew-background');
    return () => {
      document.body.classList.remove('crew-background');
    };
  });

  const toggleCrewButtons = (id) => {
    // Toggle crew buttons when the user clicks on them
    setCrewId(id);
  };

  const crewButtons = newCrewData.map((crew) => (
    <button
      className="btn-crew"
      key={crew.id}
      id={crew.id}
      onClick={() => toggleCrewButtons(crew.id)}
    ></button>
  ));

  return (
    <div>
      <NavBar />
      <main className="main-planet-holder">
        <section className="main-container-left crew-container">
          <h2>
            <span className="grey-text">02</span>MEET YOUR CREW
          </h2>
          <h3 className="crew-heading-specialization">
            <span className="grey-text">
              {newCrewData[crewId].specialization}
            </span>
          </h3>
          <h1 className="crew-heading-name">{newCrewData[crewId].name}</h1>
          <p className="planet-description-paragraph">
            {newCrewData[crewId].description}
          </p>
          <div className='btn-container'>{crewButtons}</div>
        </section>
        <section className="main-container-right planet-description">
          <img
            className="crew-image"
            src={newCrewData[crewId].img}
            alt="crew"
          />
        </section>
      </main>
    </div>
  );
};

export default Crew;
