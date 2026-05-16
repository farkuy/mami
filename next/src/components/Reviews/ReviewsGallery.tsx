'use client';

import { useCallback, useEffect, useState } from 'react';
import SmartImage from '../ui/SmartImage/SmartImage';
import rw1 from '../../assets/reviews/rw1.jpg';
import rw3 from '../../assets/reviews/rw3.jpg';
import rw4 from '../../assets/reviews/rw4.jpg';
import rw5 from '../../assets/reviews/rw5.jpg';
import rw6 from '../../assets/reviews/rw6.jpg';
import rw7 from '../../assets/reviews/rw7.jpg';
import rw8 from '../../assets/reviews/rw8.jpg';
import rw9 from '../../assets/reviews/rw9.jpg';
import rw10 from '../../assets/reviews/rw10.jpg';
import rw11 from '../../assets/reviews/rw11.jpg';
import rw12 from '../../assets/reviews/rw12.jpg';
import rw13 from '../../assets/reviews/rw13.jpg';
import styles from './ReviewsGallery.module.css';

const images = [
  rw1,
  rw3,
  rw4,
  rw5,
  rw6,
  rw7,
  rw8,
  rw9,
  rw10,
  rw11,
  rw12,
  rw13,
].map((src, i) => ({ src, alt: `Отзыв ${i + 1}`, key: `review-${i + 1}` }));

export default function ReviewsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, close, prev, next]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {images.map((img, i) => (
            <button
              type="button"
              key={img.key}
              className={styles.item}
              onClick={() => setActiveIndex(i)}
              aria-label={`Открыть ${img.alt}`}
            >
              <SmartImage
                className={styles.image}
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
          <button
            type="button"
            className={`${styles.navBtn} ${styles.closeBtn}`}
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Закрыть"
          >
            x
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Предыдущее"
          >
            ‹
          </button>
          <SmartImage
            className={styles.lightboxImage}
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Следующее"
          >
            ›
          </button>
          <div className={styles.counter}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
