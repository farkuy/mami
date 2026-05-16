import Reviews from '@/components/Reviews/Reviews';
import ReviewsGallery from '@/components/Reviews/ReviewsGallery';
import { buildPageMetadata } from '@/config/seo';
import reviewsImg from '@/assets/rew.jpg';

export const metadata = buildPageMetadata({
  title: 'Отзывы об экскурсиях',
  description:
    'Отзывы гостей о персональных экскурсиях по Нижнему Новгороду, авторских маршрутах и работе частного гида.',
  path: '/reviews',
  image: reviewsImg,
  imageAlt: 'Отзывы об экскурсиях по Нижнему Новгороду',
});

export default function ReviewsPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <Reviews />
      <ReviewsGallery />
    </div>
  );
}
