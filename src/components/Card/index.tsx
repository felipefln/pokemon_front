import { usePokemon } from '../../hooks/usePokemon';
import styles from './styles.module.scss';

interface CardProps {
  image: string;
  name: string;
  number: string;
  types: string[];
  isFavorite: boolean;
}

export function Card({ image, name, number, types, isFavorite }: CardProps) {
  const { favoriteEngine } = usePokemon();

  const handleFavorite = () => {
    favoriteEngine(number, isFavorite);
  };

  function addDefaultSrc(e: any) {
    e.target.src =
      'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/996/notfound.png';
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <button
          type="button"
          onClick={handleFavorite}
          className={isFavorite ? `${styles.always}` : `${styles.onlyHover}`}
        >
          {isFavorite ? (
            <i className="fas fa-heart fa-lg" />
          ) : (
            <i className="far fa-heart fa-lg" />
          )}
        </button>
        <img
          onError={(e) => addDefaultSrc(e)}
          src={image}
          alt={`Imagem de ${name}`}
          loading="lazy"
        />
      </div>
      <span>Nº {number}</span>
      <h2>{name}</h2>
      {types.map((type) => (
        <p key={type} className={styles[type]}>
          {type}
        </p>
      ))}
    </div>
  );
}
