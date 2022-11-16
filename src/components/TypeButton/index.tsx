import styles from './styles.module.scss';

interface TypeButtonProps {
  type: string;
  typeButtonActive: string | null;
  handleActiveButton: (type: string) => void;
}

export function TypeButton({
  type,
  typeButtonActive,
  handleActiveButton,
}: TypeButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.typeButton} ${
        typeButtonActive === type && styles.active
      }`}
      onClick={() => handleActiveButton(type)}
    >
      {type}

      {typeButtonActive === type && <i className="fas fa-check fa-xs" />}
    </button>
  );
}
