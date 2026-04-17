import OrderForm from '../OrderForm/OrderForm';
import styles from './ContactForm.module.css';
import { contacts } from '../../config/contacts';

const bullets = [
  'Бесплатная консультация и подбор маршрута',
  'Быстрый ответ',
  'Подстраиваю программу под ваши интересы и темп',
];

export default function ContactForm() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className={styles.kicker}>Свяжитесь со мной</span>
            <h2 className={styles.title}>Готовы к путешествию?</h2>
            <p className={styles.lead}>
              Напишите в свободной форме — и я помогу спланировать
              идеальный маршрут по Нижнему Новгороду.
            </p>

            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b} className={styles.bullet}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <div className={styles.contacts}>
              <a href={`tel:${contacts.phone.tel}`} className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3.09a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>
                  <span className={styles.contactLabel}>Телефон</span>
                  <span className={styles.contactValue}>{contacts.phone.display}</span>
                </span>
              </a>

              <a
                href={contacts.messengers.telegram.href}
                className={styles.contactItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                </span>
                <span>
                  <span className={styles.contactLabel}>Telegram</span>
                  <span className={styles.contactValue}>Написать в мессенджер</span>
                </span>
              </a>
            </div>
          </div>

          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Оставить заявку</h3>
            <p className={styles.formHint}>
              Заполните форму — я свяжусь с вами в ближайшее время.
            </p>
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
}
