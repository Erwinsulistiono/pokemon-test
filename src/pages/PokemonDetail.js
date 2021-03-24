import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../graphql/getPokemons';
import LoadingScreen from '../components/Loading';
import { useLocation } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import PokemonNavbar from '../components/PokemonNavbar' ;
import TypeWrapper from '../components/TypeWrapper';
import AbilityWrapper from '../components/AbilityWrapper';
import MovesWrapper from '../components/MovesWrapper';
import PokeballButton from '../components/PokeballButton';
import EditName from '../components/EditName';
import Modal from "../components/Modal";

import '../style/Styles.css';

function handleCatchPokemon({id, name, image}) {
  if (Math.random() > 0.5) return alert('Pokemon Gagal Ditangkap');

  const existingPokemons = (sessionStorage.getItem('myPokemon') ? JSON.parse(sessionStorage.getItem('myPokemon')) : false);
  const newPokemon = [{id: id, name: name, image: image}];
  const myNewPokemons = existingPokemons ? [ ...existingPokemons, ...newPokemon ] : [ ...newPokemon ];
  sessionStorage.setItem('myPokemon', JSON.stringify(myNewPokemons));

  alert('Pokemon Berhasil Ditangkap');
  window.history.go(-1);
}

function handleReleasePokemon({ id, name, image }) {
  const existingPokemons = JSON.parse(sessionStorage.getItem('myPokemon'));
  const newPokemons = existingPokemons.filter(pokemon => pokemon.name !== name);
  
  sessionStorage.setItem('myPokemon', JSON.stringify(newPokemons));
  alert('Pokemon Berhasil Dilepaskan');
  window.history.go(-1);
}

function renamePokemon({ id, name, image }) {
  const el = document.body.querySelector('#new-pokemon-name');
  const existingPokemons = JSON.parse(sessionStorage.getItem('myPokemon'));

  const myNewPokemons = existingPokemons.map(p => {
    if (p.id === id) return {id: id, name: el.value, image: image, oldName: name};
    return p;
  })

  sessionStorage.setItem('myPokemon', JSON.stringify(myNewPokemons));
  alert('nama pokemon berhasil diperbaharui')
  window.history.go(-1);
}

const PokemonDetail = () => {
  const location = useLocation()
  const [ show, setShow ] = useState(false);
  const prevWindow = (location.state.path);
  const pokemon = (location.state.pokemon.value);

  const { loading, error, data } = useQuery(GET_POKEMON, {
      variables: {
        name: (pokemon.oldName) ? (pokemon.oldName) : pokemon.name,
      }
  });

  if (loading) return <LoadingScreen />;
  if (error) console.log(error);

  return (
    <>
      <PokemonNavbar />
      <div className="container">
        <div className="details-container">
          <div className="details-header">
            <div className="box-wrapper">
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
              <TypeWrapper pokemon={data.pokemon}/>
            </div>
          </div>
          <div className="details">
            <div className="details-pokemon-container">
              <div className="details-title">Abilities</div>
              <div className="details-value">
                <AbilityWrapper abilities={data.pokemon.abilities}/>
              </div>
            </div>
            <div className="details-pokemon-container">
              <div className="details-title">Moves</div>
              <div className="details-value">
                <MovesWrapper moves={data.pokemon.moves}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-footer-container">
        <button className="btn-catch-release" onClick={() => { (prevWindow !== '/') ? handleReleasePokemon(pokemon) : handleCatchPokemon(pokemon)}} >
          <PokeballButton prevWindow={prevWindow} />
        </button>
        <button className="btn-catch-release" onClick={() => {setShow(true)}} >
          <EditName prevWindow={prevWindow} />
        </button>
      </div>
      <Modal title="Edit Name" confirm="Save" onClose={() => {setShow(false); renamePokemon(pokemon)}} show={show}>
        <input className="input-field" id="new-pokemon-name" />
      </Modal>
    </>
  )
}

export default PokemonDetail;