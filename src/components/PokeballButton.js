import React from 'react';
import pokeballOpen from '../img/open-pokeball.png';
import pokeballClosed from '../img/closed-pokeball.png';
import '../style/Styles.css';

const PokeballButton = (prevWindow) => {
  const img = (prevWindow.prevWindow !== '/') ? pokeballOpen : pokeballClosed;
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