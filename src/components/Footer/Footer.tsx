import Link from 'next/link';
import { contacts } from '@/config/contacts';
import { navItems } from '@/config/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>Нижний Новгород: Открой Свой</p>
          <p className={styles.desc}>
            Персональный гид по Нижнему Новгороду. Индивидуальные и групповые
            экскурсии.
          </p>
        </div>

        <div>
          <p className={styles.colTitle}>Навигация</p>
          <div className={styles.links}>
            {navItems.map((item) => (
              <Link key={item.to} href={item.to} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.colTitle}>Связаться</p>
          <div className={styles.links}>
            <a href={`tel:${contacts.phone.tel}`} className={styles.link}>
              {contacts.phone.display}
            </a>
            <a href={`mailto:${contacts.email}`} className={styles.link}>
              {contacts.email}
            </a>
          </div>
          <div className={styles.social}>
            <a
              href={contacts.messengers.telegram.href}
              className={styles.socialLink}
              aria-label={contacts.messengers.telegram.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>
            <a
              href={contacts.messengers.max.href}
              className={styles.socialLink}
              aria-label={contacts.messengers.max.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="35" height="35" viewBox="0 1 24 24" aria-hidden="true">
                <path
                  d="M16.96 7.1c-2.12-1.28-4.85-1.28-6.97-.02C7.88 8.33 6.58 10.65 6.68 13.1c.04.95.27 1.88.7 2.73l-.56 2.29c-.11.44.28.83.72.73l2.3-.54a6.28 6.28 0 0 0 6.99-.58c1.85-1.52 2.73-3.99 2.24-6.33a6.16 6.16 0 0 0-2.11-4.3Zm-1 8.54a4.1 4.1 0 0 1-4.95.38.97.97 0 0 0-.71-.12l-.84.2.2-.82a.98.98 0 0 0-.11-.72 4.14 4.14 0 0 1-.55-2.18 4.13 4.13 0 0 1 6.76-3.03 4.15 4.15 0 0 1 .2 6.29Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomWrap}>
        <div className={`container ${styles.bottom}`}>
          <span>&copy; {new Date().getFullYear()} Нижний Новгород: Открой Свой. Все права защищены.</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              Политика конфиденциальности
            </Link>
            <Link href="/data-policy" className={styles.bottomLink}>
              Обработка персональных данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
