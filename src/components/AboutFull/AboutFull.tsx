import styles from './AboutFull.module.css';
import uslugiImg from '../../assets/uslugi.jpg';
import Card from '../ui/Card/Card';
import PageBanner from '../ui/PageBanner/PageBanner';

type Service = {
  title: string;
  description: string;
  price?: string;
  highlight?: string;
};

const services: Service[] = [
  {
    title: 'Индивидуальный маршрут',
    description:
      'Составим персональный маршрут, порекомендуем лучшие туристические места, музеи и рестораны под ваши интересы.',
    highlight: 'Бесплатно',
  },
  {
    title: 'Услуги аттестованного гида',
    description:
      'Профессиональное экскурсионное сопровождение на маршруте аттестованным гидом-экскурсоводом.',
  },
  {
    title: 'Разработка программы пребывания',
    description:
      'Полная разработка экскурсионной программы, бронирование услуг, корректировка и контроль выполнения.',
    price: 'от 2 000 ₽ / день',
  },
  {
    title: 'Сопровождение на маршруте',
    description:
      'Гид рядом с вами на всех этапах программы — от встречи до завершения поездки, по вашему запросу.',
  },
  {
    title: 'Аренда транспорта',
    description:
      'Поможем подобрать и арендовать комфортный транспорт для экскурсий любого формата — от авто до автобуса.',
  },
  {
    title: 'Подарочный сертификат',
    description:
      'Подарите близким интересное время и яркие впечатления — сертификат на экскурсию по Нижнему Новгороду.',
  },
  {
    title: 'Юбилеи, свадьбы, семейные даты',
    description:
      'Экскурсионное обслуживание особенных событий — сделаем ваш праздник по-настоящему запоминающимся.',
  },
  {
    title: 'Группы и корпоративные туры',
    description:
      'Экскурсии для индивидуальных туристов и корпоративных групп любого размера и состава.',
  },
];

export default function AboutFull() {
  return (
    <section className={styles.page}>
      <PageBanner
        image={uslugiImg}
        imageAlt="Панорама Нижнего Новгорода"
        kicker="Услуги"
        title="Всё для комфортного путешествия по Нижнему"
        lead="От бесплатной консультации и составления маршрута до полного сопровождения групп и корпоративных туров — подберём формат под любую задачу."
        tall
      />

      <div className="container">
        <ol className={styles.services}>
          {services.map((service, index) => (
            <Card key={service.title} as="li" className={styles.service}>
              <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
              <div className={styles.serviceBody}>
                <div className={styles.serviceHead}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  {service.highlight && (
                    <span className={styles.badge}>{service.highlight}</span>
                  )}
                  {service.price && (
                    <span className={styles.price}>{service.price}</span>
                  )}
                </div>
                <p className={styles.serviceText}>{service.description}</p>
              </div>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  );
}
