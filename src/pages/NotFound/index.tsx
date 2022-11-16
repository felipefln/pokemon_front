import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import styles from './styles.module.scss';

export function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.page404container}>
        <h1>Página não encontrada - Error: 404</h1>
        <img
          src="https://preview.redd.it/757o6hb2q3w31.png?auto=webp&s=868d6732562a1b6d8747aeb1649695ea47cac753"
          alt="Imagem do pokemon 404"
        />
      </main>
      <Footer />
    </>
  );
}
