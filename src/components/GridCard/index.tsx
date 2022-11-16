import React from 'react';
import { Card } from '../Card/index'
import { usePokemon } from '../../hooks/usePokemon';
import styles from './styles.module.scss';

export function GridCard() {
  const { mainData } = usePokemon();
  console.log(`mainData`, mainData)
  return (
    <div className={styles.cardGrid}>
      <Card 
        name="" 
        image=""
        number=""
        types={[]}
        isFavorite={false}
        />
    </div>
  )
}