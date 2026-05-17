import Tours from '@/components/Tours/Tours';
import { buildPageMetadata } from '@/config/seo';
import overviewImg from '@/assets/excursions/overview.webp';

export const metadata = buildPageMetadata({
  title: 'Экскурсии по Нижнему Новгороду',
  description:
    'Каталог экскурсий по Нижнему Новгороду с частным гидом: обзорные, пешеходные, тематические, гастрономические и детские маршруты.',
  path: '/tours',
  image: overviewImg,
  imageAlt: 'Обзорная экскурсия по Нижнему Новгороду',
});

export default function ToursPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <Tours />
    </div>
  );
}
