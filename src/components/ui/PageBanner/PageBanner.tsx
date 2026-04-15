import styles from './PageBanner.module.css';

type Props = {
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  lead: string;
  tall?: boolean;
  imagePosition?: 'center' | 'center-15';
  eager?: boolean;
};

export default function PageBanner({
  image,
  imageAlt,
  kicker,
  title,
  lead,
  tall = false,
  imagePosition = 'center',
  eager = true,
}: Props) {
  const imageClass =
    imagePosition === 'center-15' ? `${styles.image} ${styles.imageCenter15}` : styles.image;
  const bannerClass = tall ? `${styles.banner} ${styles.bannerTall}` : styles.banner;

  return (
    <div className={bannerClass}>
      <img
        src={image}
        alt={imageAlt}
        className={imageClass}
        loading={eager ? 'eager' : 'lazy'}
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
