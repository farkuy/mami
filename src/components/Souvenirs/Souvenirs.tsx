'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Souvenirs.module.css';
import SmartImage from '../ui/SmartImage/SmartImage';
import Modal from '../ui/Modal/Modal';
import { souvenirs, souvenirsBonus, souvenirsPage } from '../../data/souvenirs';

export default function Souvenirs() {
  const [qrOpen, setQrOpen] = useState(false);

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

        <aside className={styles.bonus} aria-labelledby="souvenirs-bonus-title">
          <div className={styles.bonusContent}>
            <span className={styles.bonusKicker}>Справочная информация</span>
            <h2 id="souvenirs-bonus-title" className={styles.bonusTitle}>
              {souvenirsBonus.title}
            </h2>
            <p className={styles.bonusText}>{souvenirsBonus.text}</p>
            <p className={styles.discountNote}>
              QR-код на скидку: {souvenirsBonus.discount}
            </p>
            <p className={styles.bonusPlace}>{souvenirsBonus.place}</p>
          </div>
          <button
            type="button"
            className={styles.qrButton}
            onClick={() => setQrOpen(true)}
            aria-label="Открыть QR-код магазина Карман в большом формате"
          >
            <SmartImage
              className={styles.bonusImage}
              src={souvenirsBonus.image}
              alt="QR-код магазина Карман"
              loading="lazy"
            />
            <span className={styles.qrHint}>Увеличить</span>
          </button>
        </aside>

        <p className={styles.note}>{souvenirsPage.note}</p>
      </div>

      <Modal
        open={qrOpen}
        onClose={() => setQrOpen(false)}
        title="QR-код магазина «Карман»"
        subtitle="Условия скидки уточняйте в магазине на Большой Покровской, 27."
      >
        <SmartImage
          className={styles.qrModalImage}
          src={souvenirsBonus.image}
          alt="QR-код магазина Карман"
        />
      </Modal>
    </main>
  );
}
