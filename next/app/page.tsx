import About from '@/components/About/About';
import ContactForm from '@/components/ContactForm/ContactForm';
import Hero from '@/components/Hero/Hero';
import Meet from '@/components/Meet/Meet';
import Pitch from '@/components/Pitch/Pitch';
import { buildPageMetadata } from '@/config/seo';
import homeHeroImg from '@/assets/home-hero.jpg';

export const metadata = buildPageMetadata({
  title: 'Экскурсии по Нижнему Новгороду с частным гидом',
  description:
    'Индивидуальные и групповые экскурсии по Нижнему Новгороду: обзорные маршруты, Кремль, Стрелка, ярмарка, детские программы и авторские прогулки.',
  path: '/',
  image: homeHeroImg,
  imageAlt: 'Экскурсии по Нижнему Новгороду',
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Pitch />
      <Meet />
      <ContactForm />
    </>
  );
}
