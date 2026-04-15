import { Link } from 'react-router-dom';
import styles from './ReviewsPreview.module.css';
import Button from '../ui/Button/Button';
import ReviewCard from '../ReviewCard/ReviewCard';
import { reviews } from '../../data/reviews';

export default function ReviewsPreview() {
  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Отзывы</h2>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
        <div className={styles.more}>
          <Button as={Link} to="/reviews">
            Все отзывы
          </Button>
        </div>
      </div>
    </section>
  );
}
