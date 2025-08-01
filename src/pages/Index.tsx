import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsSlideshow from '@/components/SkillsSlideshow';
import PersonalQualities from '@/components/PersonalQualities';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SkillsSlideshow />
      <PersonalQualities />
      <Skills />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;