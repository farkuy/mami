import { type FormEvent, useState } from 'react';
import Button from '../ui/Button/Button';
import styles from './OrderForm.module.css';

const CONTACT_EMAIL = 'bogdasovanton83@gmail.com';

type Props = {
  tourName?: string;
  autoFocusFirst?: boolean;
};

export default function OrderForm({ tourName, autoFocusFirst = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    return <p className={styles.success}>Спасибо! Я свяжусь с вами в ближайшее время.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {tourName && (
        <input
          className={styles.input}
          type="text"
          value={tourName}
          disabled
          aria-label="Экскурсия"
        />
      )}
      <input
        className={styles.input}
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoFocus={autoFocusFirst}
      />
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className={styles.textarea}
        placeholder="Расскажите, что вас интересует"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" variant="accent" fullWidth className={styles.submit}>
        Отправить заявку
      </Button>
    </form>
  );
}
