import { type FormEvent, useState } from 'react';
import Button from '../ui/Button/Button';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
                required
              />
              <input
                className={styles.input}
                type="tel"
                placeholder="Телефон"
                required
              />
              <textarea
                className={styles.textarea}
                placeholder="Расскажите, что вас интересует"
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
