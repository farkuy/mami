import styles from './Gallery.module.css';
import SmartImage from '../ui/SmartImage/SmartImage';

const images = [
  { src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80', alt: 'Нижегородский Кремль' },
  { src: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80', alt: 'Стрелка на закате' },
  { src: 'https://images.unsplash.com/photo-1567954970774-58d6aa6c22cb?w=600&q=80', alt: 'Рождественская улица' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', alt: 'Панорама города' },
  { src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80', alt: 'Стрит-арт' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Гастрономия' },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className={styles.grid}>
          {images.map((img) => (
            <div key={img.alt} className={styles.item}>
              <SmartImage
                className={styles.image}
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
