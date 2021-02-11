import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.scss';
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Pokemon</NavLink>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} component={PokemonList} exact></Route>
        <Route path={"/pokemon/:pokemon"} component={Pokemon} exact></Route>
        <Redirect to={"/"}></Redirect>
      </Switch>
    </div>
  );
}

export default App;
