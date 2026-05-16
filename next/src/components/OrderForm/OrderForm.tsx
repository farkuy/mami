'use client';

import { type FormEvent, useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { contacts } from '../../config/contacts';
import Button from '../ui/Button/Button';
import styles from './OrderForm.module.css';

const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || 'http://localhost:3001/api/contact';

type Props = {
  tourName?: string;
  autoFocusFirst?: boolean;
};

type ContactErrorResponse = {
  errors?: Record<string, string>;
  error?: string;
};

export default function OrderForm({ tourName, autoFocusFirst = false }: Props) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setToastMessage('');
    }, 6000);

    return () => window.clearTimeout(timerId);
  }, [toastMessage]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setToastMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          tourName,
          acceptedPolicy,
        }),
      });

      if (!response.ok) {
        const payload = await parseErrorResponse(response);
        setToastMessage(getErrorMessage(payload));
        return;
      }

      setSubmitted(true);
    } catch {
      setToastMessage(`Не удалось отправить заявку. Напишите напрямую на ${contacts.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <p className={styles.success}>Спасибо! Заявка отправлена, я свяжусь с вами в ближайшее время.</p>;
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
          <Link href="/privacy" className={styles.consentLink}>
            политикой конфиденциальности
          </Link>{' '}
          и{' '}
          <Link href="/data-policy" className={styles.consentLink}>
            обработкой персональных данных
          </Link>
        </span>
      </label>

      <Button type="submit" variant="accent" fullWidth className={styles.submit} disabled={!acceptedPolicy || isSubmitting}>
        {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
      </Button>

      {toastMessage && (
        <div className={styles.toast} role="alert" aria-live="assertive">
          <span>{toastMessage}</span>
          <button
            className={styles.toastClose}
            type="button"
            aria-label="Закрыть уведомление"
            onClick={() => setToastMessage('')}
          >
            x
          </button>
        </div>
      )}
    </form>
  );
}

async function parseErrorResponse(response: Response): Promise<ContactErrorResponse> {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

function getErrorMessage(payload: ContactErrorResponse) {
  if (payload.errors) {
    return Object.values(payload.errors)[0] || 'Проверьте данные формы.';
  }

  return payload.error || 'Не удалось отправить заявку. Попробуйте позже.';
}
