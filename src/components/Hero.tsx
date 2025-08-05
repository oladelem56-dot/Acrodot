import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Section - Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative animate-fade-in">
              <img 
                src="/lovable-uploads/2616aab1-a032-41a0-8b92-f39f729a0929.png" 
                alt="Oladele Abiodun"
                className="w-full h-full object-cover rounded-2xl border-4 border-accent/30 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/10 to-transparent"></div>
            </div>
          </div>
          
          {/* Right Section - Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent animate-fade-in-up">
              Oladele Abiodun
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-accent font-semibold mb-6 animate-fade-in-up delay-100">
              Digital Growth Designer & eCommerce Strategist
            </p>
            <p className="text-base md:text-lg text-foreground/80 mb-8 animate-fade-in-up delay-200 leading-relaxed">
              I help businesses grow their online presence through full-service store design, 
              strategic digital marketing, and data-driven insights that convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 animate-fade-in-up delay-300">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Let's Work Together
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-6 animate-fade-in-up delay-400">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2 hover:scale-110 transform duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2 hover:scale-110 transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:oladelem56@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors p-2 hover:scale-110 transform duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;