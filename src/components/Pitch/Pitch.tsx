import styles from './Pitch.module.css';
import Button from '../ui/Button/Button';
import avatarImg from '../../assets/meet1.jpg';

const perks = [
  {
    title: 'Секретная смотровая',
    text: 'Место, откуда город виден как на ладони — не для всех туристов.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20l5-12 5 8 4-6 6 10z" />
        <circle cx="17" cy="6" r="2" />
      </svg>
    ),
  },
  {
    title: 'Идеальные фото',
    text: 'Подскажу лучшие ракурсы для селфи и групповых кадров.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7h3l2-3h8l2 3h3v12H3z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: 'Живые истории',
    text: 'Без зазубренных лекций — только то, что хочется слушать.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 14.8 6.9 17.4 8 11.8 4 7.8 9.6 7z" />
      </svg>
    ),
  },
];

export default function Pitch() {
  return (
    <section className={styles.pitch}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.kicker}>О гиде</span>
          <h2 className={styles.title}>Нижний глазами местного</h2>
          <p className={styles.lead}>
            Волжские просторы, вид с высоты Дятловых гор, купеческий уклад
            и ритм современной столицы Поволжья — всё это Нижний Новгород.
            Проведу по самым колоритным уголкам с шутками, любопытными
            историями и секретными локациями, о которых не пишут в путеводителях.
          </p>
        </div>

        <ul className={styles.perks}>
          {perks.map((p) => (
            <li key={p.title} className={styles.perk}>
              <span className={styles.perkIcon} aria-hidden="true">{p.icon}</span>
              <h3 className={styles.perkTitle}>{p.title}</h3>
              <p className={styles.perkText}>{p.text}</p>
            </li>
          ))}
        </ul>

        <figure className={styles.quote}>
          <svg className={styles.quoteMark} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.5 3C5.4 3 2 6.4 2 10.5V21h9V10.5H6.5C6.5 8.3 8.3 6.5 9.5 6.5V3zm12 0c-4.1 0-7.5 3.4-7.5 7.5V21h9V10.5h-4.5c0-2.2 1.8-4 3-4V3z" />
          </svg>
          <blockquote className={styles.quoteText}>
            Нижний сразу очаровал меня своей оригинальной красотой, стенами
            и башнями кремля, широтою водного пространства и лугов… Никакие
            Парижи да Лондоны мне этот уголок не заменят.
          </blockquote>
          <figcaption className={styles.quoteAuthor}>Фёдор Шаляпин</figcaption>
        </figure>

        <div className={styles.signature}>
          <img src={avatarImg} alt="Ирина Богдашова" className={styles.avatar} loading="lazy" />
          <div className={styles.signatureText}>
            <p className={styles.signatureIntro}>
              Шаляпин — величина. Но пусть у вас появятся свои впечатления —
              живые и незабываемые. С нетерпением жду вас в гости.
            </p>
            <p className={styles.signatureName}>Ирина Богдашова</p>
            <p className={styles.signatureRole}>Ваш гид в Нижнем Новгороде</p>
          </div>
          <Button as="a" href="#contact" variant="accent" size="lg" className={styles.cta}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
