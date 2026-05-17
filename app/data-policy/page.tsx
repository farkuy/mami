import DataPolicy from '@/components/DataPolicy/DataPolicy';
import { buildPageMetadata } from '@/config/seo';

export const metadata = buildPageMetadata({
  title: 'Обработка персональных данных',
  description:
    'Условия обработки персональных данных при отправке заявки на экскурсию по Нижнему Новгороду.',
  path: '/data-policy',
});

export default function DataPolicyPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <DataPolicy />
    </div>
  );
}
