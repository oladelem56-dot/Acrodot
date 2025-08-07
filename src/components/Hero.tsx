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
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
              Acrodot
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground animate-fade-in-up delay-100">
              Digital Marketing & eCommerce Excellence
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-in-up delay-200 leading-relaxed">
              We transform businesses through high-converting Shopify stores, strategic digital marketing, 
              and data-driven eCommerce solutions that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-300">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View Portfolio
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Work With Me
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Shopify Partner</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>50+ Stores Built</span>
              </div>
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