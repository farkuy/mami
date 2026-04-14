import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Pitch from '../components/Pitch/Pitch';
import Meet from '../components/Meet/Meet';
import ContactForm from '../components/ContactForm/ContactForm';

export default function HomePage() {
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
