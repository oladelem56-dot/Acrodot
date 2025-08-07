import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SalesProof from '@/components/SalesProof';
import Projects from '@/components/Projects';
import SimpleTestimonials from '@/components/SimpleTestimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <SalesProof />
      <Projects />
      <SimpleTestimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;