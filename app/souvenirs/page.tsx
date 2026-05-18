import Souvenirs from '@/components/Souvenirs/Souvenirs';
import { buildPageMetadata } from '@/config/seo';
import { souvenirsPage } from '@/data/souvenirs';

export const metadata = buildPageMetadata({
  title: souvenirsPage.title,
  description: souvenirsPage.description,
  path: '/souvenirs',
  image: souvenirsPage.image,
  imageAlt: souvenirsPage.title,
});

export default function SouvenirsPage() {
  return <Souvenirs />;
}
