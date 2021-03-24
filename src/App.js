import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemons from './pages/MyPokemonsList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache()
  })

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ApolloProvider client={client}>
            <PokemonList />
          </ApolloProvider>
        </Route>
        <Route path="/pokemon-detail" exact>
          <ApolloProvider client={client}>
            <PokemonDetail />
          </ApolloProvider>
        </Route>
        <Route path="/my-pokemon" exact>
          <MyPokemons />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
