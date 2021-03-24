import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonWrapper = (pokemons) => {

    const newPokemons = pokemons.pokemons.map((p) => 
        Object.assign({}, p, {count:0})
    )

    const myPokemons = sessionStorage.getItem("myPokemon") ? JSON.parse(sessionStorage.getItem("myPokemon")) : {} ;
    
    const allPokemon = myPokemons.length > 0 ?
        newPokemons.map(p => {
            p.count = 0;
            myPokemons.forEach(myP => (myP.id === p.id) && p.count++)
            return p;
        }) : newPokemons;

    return (
        <div className="container">
            { allPokemon.length > 0 &&
                allPokemon.map(p => <PokemonCard key={p.id} pokemon={p} />)
            }
        </div>
    );    
};

export default PokemonWrapper;