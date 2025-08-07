import { Button } from '@/components/ui/button';
import { ArrowDown, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        {/* Abstract Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,400 C300,200 600,600 900,300 C1000,200 1100,500 1200,400 L1200,800 L0,800 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white space-y-8">
            {/* Logo */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                ACRODOT
              </h1>
              <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>
            </div>
            
            {/* Headlines */}
            <div className="space-y-6 animate-fade-in-up delay-100">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                We Build Stores That 
                <span className="text-yellow-400"> Sell</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                High-converting Shopify & Wix stores designed to turn visitors into customers. 
                Professional eCommerce solutions that drive real revenue growth.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white border-0 rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => scrollToSection('projects')}
              >
                View Portfolio
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-xl px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                onClick={() => scrollToSection('contact')}
              >
                Work With Me
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 animate-fade-in-up delay-300">
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">Shopify Partner</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium">50+ Stores Built</span>
              </div>
            </div>
          </div>
          
          {/* Right: Sales Proof Card */}
          <div className="animate-fade-in-up delay-400">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Live Store Performance
                </h3>
                <div className="text-4xl font-bold text-primary mb-1">$5,279.27</div>
                <p className="text-muted-foreground">Total Sales This Month</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-xl">
                  <div className="text-2xl font-bold text-accent">354</div>
                  <p className="text-sm text-muted-foreground">Orders</p>
                </div>
                <div className="text-center p-4 bg-success/5 rounded-xl">
                  <div className="text-2xl font-bold text-success">4.76%</div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-success">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+24% from last month</span>
              </div>
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