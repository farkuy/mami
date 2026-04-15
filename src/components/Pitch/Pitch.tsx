import styles from './Pitch.module.css';
import Card from '../ui/Card/Card';
import Button from '../ui/Button/Button';

export default function Pitch() {
  return (
    <section className={styles.pitch}>
      <div className={styles.container}>
        <p className={styles.lead}>
          Волжские просторы, вид с высоты Дятловых гор, купеческий уклад
          и ритм современной столицы Поволжья — всё это Нижний Новгород.
        </p>

        <p className={styles.body}>
          Проведу вас по самым колоритным уголкам города — с шутками,
          любопытными историями и секретными локациями, о которых
          не пишут в путеводителях. Свежий воздух, живописные виды,
          старинные улочки и живой рассказ без сухих дат и скучных лекций.
        </p>
      </div>

      <div className={styles.perksWrap}>
        <ul className={styles.perks}>
          <Card as="li" className={styles.perk}>
            <span className={styles.perkIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20l5-12 5 8 4-6 6 10z" />
                <circle cx="17" cy="6" r="2" />
              </svg>
            </span>
            <div>
              <h3 className={styles.perkTitle}>Секретная смотровая</h3>
              <p className={styles.perkText}>
                Место, откуда город виден как на ладони — не для всех туристов.
              </p>
            </div>
          </Card>

          <Card as="li" className={styles.perk}>
            <span className={styles.perkIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h3l2-3h8l2 3h3v12H3z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </span>
            <div>
              <h3 className={styles.perkTitle}>Идеальные фото</h3>
              <p className={styles.perkText}>
                Подскажу лучшие ракурсы для селфи и групповых кадров.
              </p>
            </div>
          </Card>

          <Card as="li" className={styles.perk}>
            <span className={styles.perkIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 14.8 6.9 17.4 8 11.8 4 7.8 9.6 7z" />
              </svg>
            </span>
            <div>
              <h3 className={styles.perkTitle}>Живые истории</h3>
              <p className={styles.perkText}>
                Без зазубренных лекций — только то, что хочется слушать.
              </p>
            </div>
          </Card>
        </ul>
      </div>

      <div className={styles.container}>
        <figure className={styles.quote}>
          <blockquote>
            «Нижний сразу очаровал меня своей оригинальной красотой, стенами
            и башнями кремля, широтою водного пространства и лугов… Никакие
            Парижи да Лондоны мне этот уголок не заменят».
          </blockquote>
          <figcaption>Фёдор Шаляпин</figcaption>
        </figure>

        <p className={styles.outro}>
          Шаляпин — это безусловная величина. Но пусть у вас появятся
          свои впечатления о Нижнем — живые и незабываемые.
          С нетерпением жду вас в гости.
        </p>

        <p className={styles.signature}>
          Ваш гид в Нижнем Новгороде, Ирина Богдашова
        </p>

        <Button as="a" href="#contact">
          Записаться на экскурсию
        </Button>
      </div>
    </section>
  );
}
