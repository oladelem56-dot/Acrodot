import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp } from 'lucide-react';

const SalesProof = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const salesData = [
    { amount: '$16,000', client: 'Fashion Store Owner', period: 'First Month' },
    { amount: '$25,000', client: 'Beauty Brand', period: 'Launch Week' },
    { amount: '$35,000', client: 'Dropshipping Store', period: 'Best Month' },
    { amount: '$8,000', client: 'Local Restaurant', period: 'Opening Month' },
    { amount: '$17,000', client: 'Boutique Store', period: 'Holiday Sales' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % salesData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [salesData.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-accent">
            Real Results for Real Clients
          </h2>
          <p className="text-muted-foreground">
            See how my clients are generating sales with their new stores
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {salesData.map((sale, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-accent/20 bg-gradient-to-br from-card to-secondary/30">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-accent/20">
                          <DollarSign className="w-8 h-8 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-4xl font-bold text-accent mb-2">
                        {sale.amount}
                      </h3>
                      <p className="text-foreground font-medium mb-1">
                        {sale.client}
                      </p>
                      <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {sale.period}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {salesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-accent' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesProof;