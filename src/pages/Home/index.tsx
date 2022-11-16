import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'
import { GridCard } from '../../components/GridCard';
import { SearchBar } from '../../components/SearchBar';

import styles from './styles.module.scss';

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <header className={styles.mainHeader}>
          <SearchBar />
        </header>
        <section className={styles.pokemonsSection}>
          <GridCard />
        </section>
      </main>
      <Footer />
    </>
  );
}