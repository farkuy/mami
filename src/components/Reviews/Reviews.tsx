import styles from './Reviews.module.css';
import PageBanner from '../ui/PageBanner/PageBanner';
import ReviewCard from '../ReviewCard/ReviewCard';
import { reviews } from '../../data/reviews';
import reviewsImg from '../../assets/rew.jpg';

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <PageBanner
        image={reviewsImg}
        imageAlt="Отзывы наших гостей"
        imagePosition="center-15"
        kicker="Отзывы"
        title="Что говорят наши гости"
        lead="Живые впечатления после экскурсий по Нижнему Новгороду — от индивидуальных прогулок до семейных и корпоративных туров."
      />

      <div className="container">
        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
