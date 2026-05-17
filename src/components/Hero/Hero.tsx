'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Hero.module.css';
import Modal from '../ui/Modal/Modal';
import OrderForm from '../OrderForm/OrderForm';
import homeHeroImg from '../../assets/home-hero.jpg';

const tags = [
  {
    label: 'В городе',
    to: '/tours#city',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2" />
      </svg>
    ),
  },
  {
    label: 'Для детей',
    to: '/tours#children',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
        <path d="M9 11l-2 3M15 11l2 3" />
      </svg>
    ),
  },
  {
    label: 'В окрестностях',
    to: '/tours#region',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 20l6-3 6 3 6-3V7l-6 3-6-3-6 3z" />
        <path d="M9 4v13M15 7v13" />
      </svg>
    ),
  },
  {
    label: 'Свой маршрут',
    to: '/tours',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8 7c4 0 8 2 8 6" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [customRouteOpen, setCustomRouteOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={homeHeroImg}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className={styles.bgImage}
          aria-hidden="true"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Откройте Нижний Новгород с&nbsp;персональным гидом
          </h1>
          <p className={styles.subtitle}>
            Индивидуальные и групповые экскурсии по столице закатов.
            Авторские маршруты, увлекательные истории, незабываемые впечатления.
          </p>
          <div className={styles.tags}>
            {tags.map((t) => (
              t.label === 'Свой маршрут' ? (
                <button
                  key={t.label}
                  type="button"
                  className={styles.tag}
                  onClick={() => setCustomRouteOpen(true)}
                >
                  <span className={styles.tagIcon}>{t.icon}</span>
                  {t.label}
                </button>
              ) : (
                <Link key={t.label} href={t.to} className={styles.tag}>
                  <span className={styles.tagIcon}>{t.icon}</span>
                  {t.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={customRouteOpen}
        onClose={() => setCustomRouteOpen(false)}
        title="Заявка на свой маршрут"
        subtitle="Расскажите, что хочется увидеть, - подберем формат, темп и маршрут под вас"
      >
        <OrderForm tourName="Свой маршрут" autoFocusFirst />
      </Modal>
    </>
  );
}
