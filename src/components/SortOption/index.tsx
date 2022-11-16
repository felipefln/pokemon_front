import { usePokemon } from '../../hooks/usePokemon';
import styles from './styles.module.scss';

export function SortOption() {
  const { setOrderSelection } = usePokemon();
  return (
    <div className={styles.sortOptionContainer}>
      <span>Ordenar por</span>
      <label htmlFor="sortSearch">
        <select
          name="sortSearch"
          onChange={(e) => setOrderSelection(e.target.value)}
        >
          <option value="ascending ">Menor número primeiro</option>
          <option value="descending">Maior número primeiro </option>
        </select>
      </label>
    </div>
  );
}
