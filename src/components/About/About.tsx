import styles from './About.module.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Авторские маршруты',
    text: 'Уникальные программы, которые вы не найдёте в типичных путеводителях. Каждая экскурсия — история, рассказанная с душой.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: 'Без очередей и суеты',
    text: 'Продуманная логистика и знание города — обойдём толпы туристов и увидим больше за меньшее время.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Индивидуальный подход',
    text: 'Программа подстраивается под ваши интересы, темп и пожелания. Экскурсия для вас, а не вы для экскурсии.',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.kicker}>Преимущества</span>
          <h2 className={styles.title}>Почему выбирают меня</h2>
          <p className={styles.lead}>
            Живые истории, продуманный маршрут и забота о каждой детали —
            от первой заявки до последнего кадра на память.
          </p>
        </div>

        <ul className={styles.grid}>
          {features.map((f) => (
            <li key={f.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
