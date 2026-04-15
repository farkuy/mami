import Card from '../ui/Card/Card';
import Stars from '../ui/Stars/Stars';
import type { Review } from '../../data/reviews';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <Card hoverable={false}>
      <Stars count={review.rating} className={styles.stars} />
      <p className={styles.text}>"{review.text}"</p>
      <p className={styles.author}>{review.name}</p>
      <p className={styles.date}>{review.date}</p>
    </Card>
  );
}
