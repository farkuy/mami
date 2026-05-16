import { type FormEvent, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button/Button';
import styles from './OrderForm.module.css';

const CONTACT_EMAIL = 'bogdasovanton83@gmail.com';

type Props = {
  tourName?: string;
  autoFocusFirst?: boolean;
};

export default function OrderForm({ tourName, autoFocusFirst = false }: Props) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = tourName
      ? `Заявка на экскурсию «${tourName}» от ${name}`
      : `Заявка на экскурсию от ${name}`;
    const body = [
      tourName && `Экскурсия: ${tourName}`,
      `Имя: ${name}`,
      `Email: ${email}`,
      '',
      message || '(без комментария)',
    ]
      .filter(Boolean)
      .join('\n');

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    setSubmitted(true);
  };

  if (submitted) {
    return <p className={styles.success}>Спасибо! Открылось письмо с вашей заявкой.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {tourName && (
        <div className={`${styles.field} ${styles.fieldDisabled}`}>
          <input
            id={`${formId}-tour`}
            className={styles.input}
            type="text"
            value={tourName}
            disabled
          />
          <label className={styles.label} htmlFor={`${formId}-tour`}>
            Экскурсия
          </label>
        </div>
      )}

      <div className={styles.field}>
        <input
          id={`${formId}-name`}
          className={styles.input}
          type="text"
          placeholder=" "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus={autoFocusFirst}
          autoComplete="name"
        />
        <label className={styles.label} htmlFor={`${formId}-name`}>
          Ваше имя
        </label>
      </div>

      <div className={styles.field}>
        <input
          id={`${formId}-email`}
          className={styles.input}
          type="email"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <label className={styles.label} htmlFor={`${formId}-email`}>
          Email
        </label>
      </div>

      <div className={styles.field}>
        <textarea
          id={`${formId}-message`}
          className={styles.textarea}
          placeholder=" "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label className={styles.label} htmlFor={`${formId}-message`}>
          Расскажите, что вас интересует
        </label>
      </div>

      <label className={styles.consent}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={acceptedPolicy}
          onChange={(e) => setAcceptedPolicy(e.target.checked)}
          required
        />
        <span>
          Соглашаюсь с{' '}
          <Link to="/privacy" className={styles.consentLink}>
            политикой конфиденциальности
          </Link>{' '}
          и{' '}
          <Link to="/data-policy" className={styles.consentLink}>
            обработкой персональных данных
          </Link>
        </span>
      </label>

      <Button type="submit" variant="accent" fullWidth className={styles.submit} disabled={!acceptedPolicy}>
        Отправить заявку
      </Button>
    </form>
  );
}
