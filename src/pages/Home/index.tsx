import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'
import { GridCard } from '../../components/GridCard';
import styles from './styles.module.scss';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pokemonsSection}>
          <GridCard />
        </section>
      </main>
      <Footer />
    </>
  );
}