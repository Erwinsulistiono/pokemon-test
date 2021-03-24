import React from 'react';
import pokeballOpen from '../img/open-pokeball.png';
import pokeballClosed from '../img/closed-pokeball.png';
import { useHistory, useLocation } from 'react-router-dom';
import '../style/Style.css';

const PokeballButton = (prevWindow) => {
  console.log(prevWindow.prevWindow);
  const img = (prevWindow.prevWindow != '/') ? pokeballOpen : pokeballClosed;
  return (
      <img 
      src={img} 
      alt="Pokeball"
      width="auto"
      height="60">
      </img>
  )
}

export default PokeballButton;