import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-accent-light/30 to-background"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <img 
                src="/lovable-uploads/3fd8b746-f0e3-4bc2-815b-d1d7aed6b5bf.png" 
                alt="Oladele Abiodun Moses"
                className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-xl animate-fade-in"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
            <h2 className="text-lg text-muted-foreground mb-4 animate-fade-in">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-fade-in-up">
              Oladele Abiodun Moses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
              Digital Marketer & eCommerce Website Designer (Wix & Shopify)
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
              I help businesses grow their online presence through strategic digital marketing campaigns, 
              data-driven insights, and creative content that converts visitors into customers.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="hover:bg-accent-light transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-400">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:oladele@example.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;