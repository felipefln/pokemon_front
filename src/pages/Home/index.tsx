import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'
import { GridCard } from '../../components/GridCard';
import { SearchBar } from '../../components/SearchBar';
import { SortOption } from '../../components/SortOption';
import { FilterMenu } from '../../components/FilterMenu';
import styles from './styles.module.scss';

export function Home() {
  return (
    <>
      <Header />
        <main className={styles.mainContainer}>
          <header className={styles.mainHeader}>
            <SearchBar />
            <SortOption />
          </header>
          <div className={styles.mainContent}>
            <aside className={styles.filterSection}>
              <FilterMenu />
            </aside>
            <section className={styles.pokemonsSection}>
              <GridCard />
            </section>
          </div>
        </main>
      <Footer />
    </>
  );
}