import { useEffect, useState, useCallback } from 'react';
import styles from './ReviewsGallery.module.css';

const modules = import.meta.glob('../../assets/reviews/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const images = Object.entries(modules)
  .sort(([a], [b]) => {
    const na = parseInt(a.match(/rw(\d+)/)?.[1] ?? '0', 10);
    const nb = parseInt(b.match(/rw(\d+)/)?.[1] ?? '0', 10);
    return na - nb;
  })
  .map(([path, src], i) => ({ src, alt: `Отзыв ${i + 1}`, key: path }));

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
              <img
                className={styles.image}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
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
            ×
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Предыдущее"
          >
            ‹
          </button>
          <img
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
