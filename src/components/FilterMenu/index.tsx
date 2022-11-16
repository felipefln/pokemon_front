import { useState } from 'react';
import { pokemonTypes } from '../../constants';
import { usePokemon } from '../../hooks/usePokemon';

import { TypeButton } from '../TypeButton';
import styles from './styles.module.scss';

export function FilterMenu() {
  const { setTypeSearch, setIsFavoriteFilter } = usePokemon();
  const [typeButtonActive, setTypeButtonActive] = useState<string | null>('');

  const handleActiveButton = (type: string) => {
    if (typeButtonActive === type) {
      setTypeButtonActive(null);
      setTypeSearch(null);
      return;
    }
    setTypeButtonActive(type);
    setTypeSearch(type);
  };

  const handleToggleFavoriteFilter = (isFavoriteFilterChecked: boolean) => {
    setIsFavoriteFilter(isFavoriteFilterChecked);
  };

  return (
    <div className={styles.filterMenuContainer}>
      <span>Filtrar por Tipo</span>
      <div className={styles.buttonsContainer}>
        {pokemonTypes.map((type: any) => (
          <TypeButton
            key={type}
            type={type}
            typeButtonActive={typeButtonActive}
            handleActiveButton={handleActiveButton}
          />
        ))}
      </div>

      <label htmlFor="toggle-favorites">
        <p>Filtrar Favoritos</p>
        <input
          id="toggle-favorites"
          type="checkbox"
          className={styles.switch}
          onChange={(e) => handleToggleFavoriteFilter(e.target.checked)}
        />
      </label>
    </div>
  );
}
