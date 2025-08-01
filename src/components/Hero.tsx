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
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="text-left">
            <h2 className="text-lg text-muted-foreground mb-4 animate-fade-in">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-fade-in-up">
              Oladele Abiodun Moses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
              Digital Marketer & eCommerce Website Designer (Wix, Shopify, Dropshipping)
            </p>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up delay-200">
              I help businesses grow their online presence through full-service store design, 
              strategic digital marketing campaigns, and data-driven insights that convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
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
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </Button>
            </div>
            
            <div className="flex items-center gap-6 animate-fade-in-up delay-400">
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
                href="mailto:oladelem56@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative animate-fade-in">
              <img 
                src="/lovable-uploads/2616aab1-a032-41a0-8b92-f39f729a0929.png" 
                alt="Oladele Abiodun Moses"
                className="w-full h-full object-cover rounded-2xl border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
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