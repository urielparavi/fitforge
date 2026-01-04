import BackgroundElements from '../components/BackgroundElements';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import ContactFormWithModal from '../components/ContactFormWithModal';
import Footer from '../components/Footer';

export default function FitForgeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <BackgroundElements />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Pricing />
      <Testimonials />
      <ContactFormWithModal />
      <Footer />
    </div>
  );
}