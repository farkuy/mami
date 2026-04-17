import styles from './Privacy.module.css';
import privacyImg from '../../assets/excursions/city/mysticism.jpg';
import PageBanner from '../ui/PageBanner/PageBanner';
import { contacts } from '../../config/contacts';

type Block = {
  title: string;
  items: { n: string; text: React.ReactNode }[];
};

export default function Privacy() {
  const blocks: Block[] = [
    {
      title: '1. Общие положения',
      items: [
        {
          n: '1.1.',
          text: 'Политика регламентирует обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».',
        },
        {
          n: '1.2.',
          text: 'Использование сайта означает согласие с условиями настоящей политики.',
        },
      ],
    },
    {
      title: '2. Какие данные собираются',
      items: [
        {
          n: '2.1.',
          text: 'При оформлении заявок запрашиваются: имя, фамилия, электронный адрес, номер телефона, а также сообщения и вопросы, направленные через форму обратной связи.',
        },
      ],
    },
    {
      title: '3. Цели обработки данных',
      items: [
        {
          n: '3.1.',
          text: 'Данные используются для обработки заявок, ответов на вопросы, уведомлений об изменениях услуг и улучшения работы сайта.',
        },
        {
          n: '3.2.',
          text: 'Данные не передаются третьим лицам без согласия пользователя, кроме случаев, предусмотренных законодательством РФ.',
        },
      ],
    },
    {
      title: '4. Безопасность данных',
      items: [
        {
          n: '4.1.',
          text: 'Применяются организационные и технические меры защиты данных от несанкционированного доступа.',
        },
        {
          n: '4.2.',
          text: 'Хранение данных осуществляется в течение срока, необходимого для достижения целей обработки.',
        },
      ],
    },
    {
      title: '5. Ваши права',
      items: [
        {
          n: '5.1.',
          text: 'Пользователи имеют право получать информацию об обработке данных, требовать их уточнения или удаления, отзывать согласие и обращаться в уполномоченные органы.',
        },
      ],
    },
    {
      title: '6. Контакты',
      items: [
        {
          n: '6.1.',
          text: (
            <>
              По вопросам обработки персональных данных: email{' '}
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>, телефон{' '}
              <a href={`tel:${contacts.phone.tel}`}>{contacts.phone.display}</a>.
            </>
          ),
        },
        {
          n: '6.2.',
          text: 'Политика может обновляться; актуальная версия всегда доступна на этой странице.',
        },
      ],
    },
  ];

  return (
    <section className={styles.page}>
      <PageBanner
        image={privacyImg}
        imageAlt="Политика конфиденциальности"
        kicker="Конфиденциальность"
        title="Политика обработки персональных данных"
        lead="Как мы собираем, используем и защищаем данные, которые вы оставляете на сайте при бронировании экскурсий и обратной связи."
      />

      <div className="container">
        <div className={styles.content}>
          {blocks.map((block) => (
            <div key={block.title} className={styles.block}>
              <h2 className={styles.blockTitle}>{block.title}</h2>
              {block.items.map((item) => (
                <div key={item.n} className={styles.item}>
                  <span className={styles.itemNumber}>{item.n}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ))}

          <p className={styles.updated}>Дата последнего обновления: 17.04.2026</p>
        </div>
      </div>
    </section>
  );
}
