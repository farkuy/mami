import styles from './Pitch.module.css';
import Button from '../ui/Button/Button';
import SmartImage from '../ui/SmartImage/SmartImage';
import avatarImg from '../../assets/meet1.jpg';

export default function Pitch() {
  return (
    <section className={styles.pitch}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.portrait}>
            <SmartImage src={avatarImg} alt="Ирина Богдашова" loading="lazy" />
          </div>

          <div className={styles.content}>
            <span className={styles.kicker}>О гиде</span>
            <h2 className={styles.title}>Нижний глазами местного</h2>
            <p className={styles.lead}>
              Волжские просторы, вид с высоты Дятловых гор, купеческий уклад
              и ритм современной столицы Поволжья — всё это Нижний Новгород.
              Проведу по самым колоритным уголкам с шутками, любопытными
              историями и секретными локациями, о которых не пишут в путеводителях.
            </p>

            <figure className={styles.quote}>
              <blockquote className={styles.quoteText}>
                Нижний сразу очаровал меня своей оригинальной красотой, стенами
                и башнями кремля, широтою водного пространства и лугов… Никакие
                Парижи да Лондоны мне этот уголок не заменят.
              </blockquote>
              <figcaption className={styles.quoteAuthor}>Фёдор Шаляпин</figcaption>
            </figure>

            <p className={styles.intro}>
              Шаляпин — величина. Но пусть у вас появятся свои впечатления —
              живые и незабываемые. С нетерпением жду вас в гости.
            </p>

            <div className={styles.signOff}>
              <div className={styles.signOffName}>
                <p className={styles.name}>Ирина Богдашова</p>
                <p className={styles.role}>Ваш гид в Нижнем Новгороде</p>
              </div>
              <Button as="a" href="#contact" variant="accent" size="lg" className={styles.cta}>
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
