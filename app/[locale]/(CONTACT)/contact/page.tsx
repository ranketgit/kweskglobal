import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}