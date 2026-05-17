import Privacy from '@/components/Privacy/Privacy';
import { buildPageMetadata } from '@/config/seo';

export const metadata = buildPageMetadata({
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности сайта частного гида по Нижнему Новгороду.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <Privacy />
    </div>
  );
}
