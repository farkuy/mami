import { type FormEvent, useState } from 'react';
import Button from '../ui/Button/Button';
import styles from './ContactForm.module.css';

const CONTACT_EMAIL = 'bogdasovanton83@gmail.com';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Заявка на экскурсию от ${name}`;
    const body = [
      `Имя: ${name}`,
      `Email: ${email}`,
      '',
      message || '(без комментария)',
    ].join('\n');

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Оставить заявку</h2>
        <p className="section-subtitle">Напишите, и я подберу идеальную экскурсию для вас</p>
        <div className={styles.wrapper}>
          {submitted ? (
            <p style={{ textAlign: 'center', fontSize: '1.125rem' }}>
              Спасибо! Я свяжусь с вами в ближайшее время.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
          )}
        </div>
      </div>
    </section>
  );
}
