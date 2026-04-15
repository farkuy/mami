import styles from './Payment.module.css';
import payImg from '../../assets/pay.jpg';
import Card from '../ui/Card/Card';
import PageBanner from '../ui/PageBanner/PageBanner';

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

export default function Payment() {
  return (
    <section className={styles.page}>
      <PageBanner
        image={payImg}
        imageAlt="Оплата экскурсий"
        kicker="Оплата"
        title="Условия и порядок оплаты"
        lead="Два варианта оплаты — для частных туристов и для организаций. Всё прозрачно: договор, чек и подтверждение бронирования."
      />

      <div className="container">
        <div className={styles.grid}>
          <Card as="article" variant="accent">
            <header className={styles.cardHead}>
              <span className={styles.cardIcon} aria-hidden="true">
                <PersonIcon />
              </span>
              <h2 className={styles.cardTitle}>Для физических лиц</h2>
            </header>
            <ul className={styles.steps}>
              <li className={styles.step}>
                Бронирование экскурсии по авансу — <strong>1 000 ₽</strong>.
              </li>
              <li className={styles.step}>
                После подтверждения брони высылаем QR-код для внесения аванса.
              </li>
              <li className={styles.step}>
                Предоставляем чек за оплаченный аванс.
              </li>
              <li className={styles.step}>
                Окончательный расчёт — в день экскурсии.
              </li>
            </ul>
          </Card>

          <Card as="article" variant="accent">
            <header className={styles.cardHead}>
              <span className={styles.cardIcon} aria-hidden="true">
                <BuildingIcon />
              </span>
              <h2 className={styles.cardTitle}>Для организаций</h2>
            </header>
            <ul className={styles.steps}>
              <li className={styles.step}>
                Услуги для организаций оказываются по <strong>полной предоплате</strong>.
              </li>
              <li className={styles.step}>
                Заключаем договор оказания услуг с самозанятым.
              </li>
              <li className={styles.step}>
                Для выставления счёта потребуется ИНН организации.
              </li>
            </ul>
          </Card>
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon} aria-hidden="true">
            <InfoIcon />
          </span>
          <p className={styles.noteText}>
            Остались вопросы по оплате, бронированию или документам? Свяжитесь с нами
            любым удобным способом — в Telegram или по телефону из шапки сайта.
          </p>
        </div>
      </div>
    </section>
  );
}
