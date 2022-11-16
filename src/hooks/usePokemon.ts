import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

export function usePokemon() {
  const value = useContext(PokemonContext);
  console.log(`valuePokemon`, value)
  return value;
}
