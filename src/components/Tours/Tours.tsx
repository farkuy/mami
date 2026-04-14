import styles from './Tours.module.css';
import Card from '../ui/Card/Card';

const tours = [
  {
    id: 1,
    name: 'Классический Нижний',
    description: 'Кремль, Чкаловская лестница, Большая Покровская, Стрелка — все знаковые места города за одну прогулку.',
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80',
    price: '2 500 ₽',
    duration: '3 часа',
  },
  {
    id: 2,
    name: 'Нижегородский стрит-арт',
    description: 'Муралы, граффити и арт-объекты в историческом центре. Узнайте город через современное искусство.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
    price: '2 000 ₽',
    duration: '2 часа',
  },
  {
    id: 3,
    name: 'Закаты на Стрелке',
    description: 'Вечерняя прогулка к слиянию Оки и Волги — самое красивое место для встречи заката в городе.',
    image: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80',
    price: '3 000 ₽',
    duration: '2.5 часа',
  },
  {
    id: 4,
    name: 'Купеческий Нижний',
    description: 'Усадьбы, особняки и истории нижегородского купечества. Рождественская улица и её тайны.',
    image: 'https://images.unsplash.com/photo-1567954970774-58d6aa6c22cb?w=600&q=80',
    price: '2 500 ₽',
    duration: '2.5 часа',
  },
  {
    id: 5,
    name: 'Нижний с высоты',
    description: 'Канатная дорога, смотровые площадки и панорамы города с самых впечатляющих точек.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    price: '3 500 ₽',
    duration: '3 часа',
  },
  {
    id: 6,
    name: 'Гастротур',
    description: 'Лучшие кафе, рестораны и уличная еда Нижнего. Дегустации и истории нижегородской кухни.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    price: '4 000 ₽',
    duration: '3 часа',
  },
];

export default function Tours() {
  return (
    <section id="tours" className={styles.tours}>
      <div className="container">
        <h2 className="section-title">Экскурсии</h2>
        <p className="section-subtitle">Выберите маршрут или закажите индивидуальную программу</p>
        <div className={styles.grid}>
          {tours.map((tour) => (
            <Card key={tour.id} as="article" variant="media">
              <img
                className={styles.image}
                src={tour.image}
                alt={tour.name}
                loading="lazy"
              />
              <div className={styles.body}>
                <h3 className={styles.name}>{tour.name}</h3>
                <p className={styles.description}>{tour.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{tour.price}</span>
                  <span className={styles.duration}>{tour.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
