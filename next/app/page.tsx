import About from '@/components/About/About';
import ContactForm from '@/components/ContactForm/ContactForm';
import Hero from '@/components/Hero/Hero';
import Meet from '@/components/Meet/Meet';
import Pitch from '@/components/Pitch/Pitch';

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
