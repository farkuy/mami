import AboutFull from '@/components/AboutFull/AboutFull';
import { buildPageMetadata } from '@/config/seo';
import aboutImg from '@/assets/uslugi.webp';

export const metadata = buildPageMetadata({
  title: 'О гиде и услугах',
  description:
    'Информация о частном гиде по Нижнему Новгороду, формате работы, индивидуальных маршрутах и экскурсионных услугах.',
  path: '/about',
  image: aboutImg,
  imageAlt: 'Частный гид по Нижнему Новгороду',
});

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <AboutFull />
    </div>
  );
}
