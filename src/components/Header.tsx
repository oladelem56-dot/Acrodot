import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[200] transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Acrodot
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Portfolio
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;