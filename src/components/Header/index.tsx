import React from 'react';
import pokemon from '../../assets/images/pokemon-time.png';
import pokebolla from '../../assets/images/pokeball-icon.png'
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.blackBar} />
      <div className={styles.headerContent}>
        <div>
          <img src={pokemon} alt="pokemon" />
          <h1>Pokemon - Pokedex</h1>
          <img src={pokebolla} alt="pokebolla" />
        </div>
      </div>
    </header>
  );
}
