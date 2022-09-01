import { useState } from 'react';
import axios from 'axios';
import { AppDiv, TitleSectionDiv } from './style';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [isPokemonNameNull, setIsPokemonNameNull] = useState(false);

  const pokemonNameChecker = (name) => {
    if (!name) return setIsPokemonNameNull(false);
    return setIsPokemonNameNull(true);
  };

  const searchPokemon = () => {
    pokemonNameChecker(pokemonName);
    console.log(pokemonName);
    console.log(isPokemonNameNull);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <AppDiv>
      <TitleSectionDiv>
        <h1>Poke Dex</h1>
        <div>Please enter the pokemon name!</div>
        <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
        <button onClick={searchPokemon}>Search Pokemon</button>
        {!isPokemonNameNull && (
          <span>Please enter pokemon you want to search</span>
        )}
      </TitleSectionDiv>
    </AppDiv>
  );
}

export default App;
