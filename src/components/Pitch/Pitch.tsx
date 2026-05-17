'use client';

import { useState } from 'react';
import styles from './Pitch.module.css';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import OrderForm from '../OrderForm/OrderForm';
import SmartImage from '../ui/SmartImage/SmartImage';
import meet2Img from '../../assets/meet2.webp';

export default function Pitch() {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <>
      <section className={styles.pitch}>
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.portrait}>
              <SmartImage src={meet2Img} alt="Ирина Богдашова на экскурсионном маршруте" loading="lazy" />
            </div>

            <div className={styles.content}>
              <span className={styles.kicker}>О гиде</span>
              <h2 className={styles.title}>Нижний глазами местного</h2>
              <p className={styles.lead}>
                Меня зовут Ирина Богдашова. Я профессиональный дипломированный
                гид-экскурсовод по Нижнему Новгороду и Нижегородской области:
                провожу городские прогулки, выездные маршруты и тематические
                программы без посредников и наценок.
              </p>

              <ul className={styles.credentials}>
                <li>Аттестована при министерстве туризма Нижегородской области</li>
                <li>Имею аттестацию Нижегородской епархии для экскурсий по Кафедральному собору Александра Невского</li>
                <li>Работаю напрямую: помогаю выбрать маршрут, темп и формат под вашу группу</li>
              </ul>

              <p className={styles.intro}>
                В экскурсиях соединяю точные исторические факты, городские
                легенды и живые детали современного Нижнего. Показываю не только
                главные туристические места, но и то, что обычно остается за
                страницами путеводителей: характер улиц, неожиданные ракурсы,
                скрытые истории и местный взгляд на город.
              </p>

              <div className={styles.signOff}>
                <div className={styles.signOffName}>
                  <p className={styles.name}>Ирина Богдашова</p>
                  <p className={styles.role}>Ваш гид в Нижнем Новгороде</p>
                </div>
                <Button
                  type="button"
                  variant="accent"
                  size="lg"
                  className={styles.cta}
                  onClick={() => setRequestOpen(true)}
                >
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={requestOpen}
        onClose={() => setRequestOpen(false)}
        title="Оставить заявку"
        subtitle="Оставьте контакты - свяжусь с вами и помогу подобрать удобный формат"
      >
        <OrderForm autoFocusFirst />
      </Modal>
    </>
  );
}
