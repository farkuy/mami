import Payment from '@/components/Payment/Payment';
import { buildPageMetadata } from '@/config/seo';
import paymentImg from '@/assets/pay.webp';

export const metadata = buildPageMetadata({
  title: 'Оплата экскурсий',
  description:
    'Условия оплаты экскурсий по Нижнему Новгороду: способы оплаты, предоплата, возврат и документы для гостей.',
  path: '/payment',
  image: paymentImg,
  imageAlt: 'Оплата экскурсий по Нижнему Новгороду',
});

export default function PaymentPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <Payment />
    </div>
  );
}
