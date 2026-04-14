import Reviews from '../components/Reviews/Reviews';
import ReviewsGallery from '../components/Reviews/ReviewsGallery';

export default function ReviewsPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <Reviews />
      <ReviewsGallery />
    </div>
  );
}
