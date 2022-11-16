import React from 'react';
import { Card } from '../Card/index'
import { usePokemon } from '../../hooks/usePokemon';
import styles from './styles.module.scss';

export function GridCard() {
  const { mainData } = usePokemon();

  return (
    <div className={styles.cardGrid}>
      {mainData.map((pokemon) => (
        <Card
          key={`${pokemon.national_number}`}
          image={pokemon.sprites.large}
          name={pokemon.name}
          number={pokemon.national_number}
          types={pokemon.type}
          isFavorite={pokemon.isFavorite}
        />
      ))}
    </div>
  );
}