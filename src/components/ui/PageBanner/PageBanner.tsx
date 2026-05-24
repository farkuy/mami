import styles from './PageBanner.module.css';
import SmartImage from '../SmartImage/SmartImage';
import type { StaticImageData } from 'next/image';

type Props = {
  image: string | StaticImageData;
  imageAlt: string;
  kicker: string;
  title: string;
  lead: string;
  imagePosition?: 'center' | 'center-15' | 'center-60';
  eager?: boolean;
};

export default function PageBanner({
  image,
  imageAlt,
  kicker,
  title,
  lead,
  imagePosition = 'center',
  eager = true,
}: Props) {
  const imageClass =
    imagePosition === 'center-15'
      ? `${styles.image} ${styles.imageCenter15}`
      : imagePosition === 'center-60'
        ? `${styles.image} ${styles.imageCenter60}`
        : styles.image;

  return (
    <div className={styles.banner}>
      <SmartImage
        src={image}
        alt={imageAlt}
        className={imageClass}
        loading={eager ? 'eager' : 'lazy'}
        priority={eager}
        fetchPriority={eager ? 'high' : 'auto'}
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <span className={styles.kicker}>{kicker}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </div>
  );
}
