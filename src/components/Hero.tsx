import { Button } from '@/components/ui/button';
import { ArrowDown, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0B1F3A 0%, #2D1B69 100%)'
      }}>
        {/* Subtle overlay for premium feel */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center text-white space-y-12 max-w-4xl mx-auto">
          {/* Brand Logo */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#FFD700' }}>
              ACRODOT
            </h1>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#FFD700' }}></div>
          </div>
          
          {/* Main Headlines */}
          <div className="space-y-6 animate-fade-in-up delay-100">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Build Stores That Sell
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              High-converting Shopify & Wix stores designed to turn visitors into customers. 
              Professional eCommerce solutions for real growth.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-200">
            <Button 
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: '#FFD700', 
                color: '#000',
                border: 'none'
              }}
              onClick={() => scrollToSection('projects')}
            >
              View Portfolio
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black rounded-xl px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Work With Me
            </Button>
          </div>
          
          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 animate-fade-in-up delay-300">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFD700' }}></div>
              <span className="font-medium text-lg">Shopify Partner</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFD700' }}></div>
              <span className="font-medium text-lg">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFD700' }}></div>
              <span className="font-medium text-lg">50+ Stores Built</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;