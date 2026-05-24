import styles from './Header.module.css';
import { contacts } from '@/config/contacts';

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#2AABEE" />
    <g transform="translate(-0.75 0)">
      <path
        d="M18.02 7.48 6.12 12.06c-.45.17-.44.8.02.95l2.9.94 1.13 3.47c.15.45.72.57 1.03.21l1.63-1.9 2.95 2.17c.38.28.92.07 1.01-.39l2-9.39c.09-.43-.36-.8-.77-.64Zm-2.23 2.35-4.78 4.44-.18 1.74-.75-2.31 5.71-3.87Z"
        fill="#fff"
      />
    </g>
  </svg>
);

const MaxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="maxGradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#32D8F5" />
        <stop offset="0.5" stopColor="#2C43F1" />
        <stop offset="1" stopColor="#B650E8" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="url(#maxGradient)" />
    <g transform="translate(0.35 -0.05)">
      <path
        d="M16.96 7.1c-2.12-1.28-4.85-1.28-6.97-.02C7.88 8.33 6.58 10.65 6.68 13.1c.04.95.27 1.88.7 2.73l-.56 2.29c-.11.44.28.83.72.73l2.3-.54a6.28 6.28 0 0 0 6.99-.58c1.85-1.52 2.73-3.99 2.24-6.33a6.16 6.16 0 0 0-2.11-4.3Zm-1 8.54a4.1 4.1 0 0 1-4.95.38.97.97 0 0 0-.71-.12l-.84.2.2-.82a.98.98 0 0 0-.11-.72 4.14 4.14 0 0 1-.55-2.18 4.13 4.13 0 0 1 6.76-3.03 4.15 4.15 0 0 1 .2 6.29Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default function Messengers() {
  const { telegram, max } = contacts.messengers;

  return (
    <div className={styles.social}>
      <a
        href={telegram.href}
        className={styles.socialLink}
        aria-label={telegram.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </a>
      <a
        href={max.href}
        className={styles.socialLink}
        aria-label={max.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MaxIcon />
      </a>
    </div>
  );
}
