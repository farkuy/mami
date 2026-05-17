'use client';

import { useState } from 'react';
import styles from './Meet.module.css';
import SmartImage from '../ui/SmartImage/SmartImage';
import meet2 from '../../assets/meet2.webp';
import strelkaImg from '../../assets/excursions/city/arrow.webp';
import teaImg from '../../assets/excursions/city/masterClass.webp';
import masterovoyImg from '../../assets/excursions/children4.webp';

const photos = [
  {
    src: strelkaImg,
    alt: 'Кафедральный собор Александра Невского на Стрелке',
  },
  {
    src: teaImg,
    alt: 'Чаепитие по-нижегородски с самоваром и угощениями',
  },
  {
    src: masterovoyImg,
    alt: 'Мастерская с нижегородскими промыслами',
  },
  {
    src: meet2,
    alt: 'Гид на прогулке по историческому маршруту',
  },
];

export default function Meet() {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className={styles.meet}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.kicker}>Галерея</span>
          <h2 className={styles.title}>Атмосфера экскурсий</h2>
          <p className={styles.subtitle}>
            Несколько кадров - чтобы вы почувствовали настроение наших прогулок
            ещё до первой встречи.
          </p>
        </div>

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            aria-label="Предыдущее фото"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {photos.map((photo) => (
                <div className={styles.slide} key={photo.alt}>
                  <SmartImage src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            aria-label="Следующее фото"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Перейти к фото ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
