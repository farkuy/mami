'use client';

import Link from 'next/link';
import styles from './Souvenirs.module.css';
import SmartImage from '../ui/SmartImage/SmartImage';
import { souvenirs, souvenirsPage } from '../../data/souvenirs';

export default function Souvenirs() {
  return (
    <main className={styles.page}>
      <div className="container">
        <Link href="/tours#souvenirs" className={styles.back}>
          ← К экскурсиям
        </Link>

        <header className={styles.header}>
          <span className={styles.kicker}>Сувениры</span>
          <h1 className={styles.title}>{souvenirsPage.title}</h1>
          <p className={styles.lead}>{souvenirsPage.lead}</p>
        </header>

        <section className={styles.grid} aria-label="Сувениры из Нижнего Новгорода">
          {souvenirs.map((item) => (
            <article key={item.title} className={styles.card}>
              <SmartImage
                className={styles.image}
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className={styles.body}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.text}>{item.text}</p>
                <p className={styles.place}>{item.place}</p>
              </div>
            </article>
          ))}
        </section>

        <p className={styles.note}>{souvenirsPage.note}</p>
      </div>
    </main>
  );
}
