import React from 'react';
import PokemonWrapper from '../components/PokemonWrapper';
import PokemonNavbar from '../components/PokemonNavbar' ;
import '../style/Card.css';

const MyPokemons = () => {
    const isOwnPokemons = sessionStorage.getItem('myPokemon') ? true : false;
    if (!isOwnPokemons) 
        return( <>
            <PokemonNavbar />
            <p class="container"><strong>No Pokemon Found</strong></p>
        </>
        );
        
    const pokemons = JSON.parse(sessionStorage.getItem('myPokemon'));
    
    return (
        <>
            <PokemonNavbar />
            <PokemonWrapper
                pokemons={pokemons}
            />
        </>
    )
}

export default MyPokemons;