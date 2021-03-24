import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../style/Card.css'
import '../style/Style.css'

const PokemonCard = ({ pokemon }) => {
  let history = useHistory();
  let location = useLocation();

  let handleClickPokemon = (value) => {
    history.push({
      pathname: 'pokemon-detail',
      state: {
        pokemon: {value},
        path: location.pathname,
      }
    })
  }

  return (
    <a key={pokemon} onClick={() => { handleClickPokemon(pokemon) }} className="card">
      <div className="pokemon-image">
          <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon-name">
        <p>{pokemon.name}</p>
      </div>
      { (location.pathname == '/') &&
        <div className="pokemon-owned">
          <p>{`owned : ${pokemon.count}`}</p>
        </div>
      }
    </a>
  )
}

export default PokemonCard;