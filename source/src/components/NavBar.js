import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarLogo from '../assets/shared/logo.svg';

export default function NavBar() {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  useEffect(() => {
    setDisplayWidth(window.addEventListener('resize', ()=> {
      console.log(window.innerWidth)
    }))

  });

  return (
    <div className="nav-bar-section">
      <section className="nav-bar-leftSide ">
        <Link to="/home">
          <img className="img-star-logo" src={StarLogo} alt="star" />
        </Link>
      </section>
      <dir className="inside-line">
        <hr className="hr-awesome-line" />
      </dir>
      <section className="nav-bar-rightSide">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
