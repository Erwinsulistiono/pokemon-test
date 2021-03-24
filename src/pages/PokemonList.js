import React from 'react';
import { useQuery } from '@apollo/client';
import GET_POKEMON_LIST from '../graphql/getPokemons';
import PokemonWrapper from '../components/PokemonWrapper';
import PokemonNavbar from '../components/PokemonNavbar' ;
import LoadMore from '../components/LoadMore';
import LoadingScreen from '../components/Loading';
import '../style/Card.css';


const PokemonList = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_POKEMON_LIST, {
        variables: {
            limit: 20,
            offset: 0,
        }
    });

    const updateQuery = (prevResult, { fetchMoreResult }) => {

        if (!fetchMoreResult) return prevResult
        return {
            ...prevResult,
            pokemons: {
                ...prevResult.pokemons,
                results: [
                    ...prevResult.pokemons.results,
                    ...fetchMoreResult.pokemons.results,
                ]
            }
        }
    }

    const handleLoadMore = () => {
        fetchMore({
            variables: {
                limit: 20,
                offset: data.pokemons.results.length,
            }, 
            updateQuery
        })
    }

    if (loading) return <LoadingScreen />;
    if (error) return console.log(error);
    console.log(data.pokemons.results);

    return (
        <>
            <PokemonNavbar />
            <PokemonWrapper
                pokemons={data.pokemons.results}
            />
            <LoadMore onclick={handleLoadMore}/>
        </>
    )
}

export default PokemonList;