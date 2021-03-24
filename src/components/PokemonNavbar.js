import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import PokemonLogo from '../img/pokemon-logo.png';
import Bag from '../img/bag.png'

const PokemonNavbar = () => {

  return (
    <section className="header">
      <Link to="/">
        <section className="logo">
          <img 
            src={PokemonLogo} 
            alt="Pokemon Logo" 
            width="auto" 
            height="50">
          </img>
        </section>
      </Link>
      <Link to="/my-pokemon">
        <section className="navbar">
          <a className="navbar-item">
            <img
              src={Bag}
              alt="Pokeball"
              width="auto"
              height="80">
            </img>
          </a>
        </section>
      </Link>
    </section>
  )

}

export default PokemonNavbar;