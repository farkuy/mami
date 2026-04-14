import styles from './About.module.css';
import Card from '../ui/Card/Card';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Авторские маршруты',
    text: 'Уникальные программы, которые вы не найдёте в типичных путеводителях. Каждая экскурсия — это история, рассказанная с душой.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: 'Без очередей',
    text: 'Продуманная логистика и знание города позволяют обойти толпы туристов и увидеть больше за меньшее время.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Индивидуальный подход',
    text: 'Программа адаптируется под ваши интересы, темп и пожелания. Экскурсия для вас, а не вы для экскурсии.',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">Почему выбирают меня</h2>
        <div className={styles.grid}>
          {features.map((f) => (
            <Card key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
