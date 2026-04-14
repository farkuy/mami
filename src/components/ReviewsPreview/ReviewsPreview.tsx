import { Link } from 'react-router-dom';
import styles from './ReviewsPreview.module.css';
import Card from '../ui/Card/Card';

const reviews = [
  {
    name: 'Анна М.',
    date: 'Март 2026',
    text: 'Потрясающая экскурсия! Гид рассказывал так увлекательно, что три часа пролетели незаметно. Узнали о Нижнем то, чего нет ни в одном путеводителе.',
    rating: 5,
  },
  {
    name: 'Дмитрий К.',
    date: 'Февраль 2026',
    text: 'Заказывали индивидуальную экскурсию для семьи с детьми. Программа была адаптирована идеально — дети были в восторге, а мы узнали массу нового.',
    rating: 5,
  },
  {
    name: 'Елена С.',
    date: 'Январь 2026',
    text: 'Вечерняя экскурсия — это что-то невероятное! Закат на Стрелке, подсветка Кремля, тишина набережных. Однозначно рекомендую.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPreview() {
  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Отзывы</h2>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <Card key={review.name} hoverable={false}>
              <Stars count={review.rating} />
              <p className={styles.text}>"{review.text}"</p>
              <p className={styles.author}>{review.name}</p>
              <p className={styles.date}>{review.date}</p>
            </Card>
          ))}
        </div>
        <div className={styles.more}>
          <Link to="/reviews" className="btn btn-primary">
            Все отзывы
          </Link>
        </div>
      </div>
    </section>
  );
}
