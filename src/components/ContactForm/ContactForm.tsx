import OrderForm from '../OrderForm/OrderForm';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Оставить заявку</h2>
        <p className="section-subtitle">Напишите, и я подберу идеальную экскурсию для вас</p>
        <div className={styles.wrapper}>
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
