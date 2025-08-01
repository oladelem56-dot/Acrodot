import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Oladele helped me launch a full Shopify store in just 5 days. Amazing service!",
      author: "Tasha Daniels",
      role: "Beauty Brand Owner",
      rating: 5
    },
    {
      text: "He understood my business vision and built a stunning Wix site that works flawlessly.",
      author: "Emeka Johnson",
      role: "Freelance Illustrator",
      rating: 5
    },
    {
      text: "The product research was spot-on. My store is now making consistent sales.",
      author: "Riley Thompson",
      role: "Dropshipping Entrepreneur",
      rating: 5
    },
    {
      text: "Thanks to his help, my booking website is running smoothly and looks very professional.",
      author: "Fatima Bello",
      role: "Restaurant Owner",
      rating: 5
    },
    {
      text: "He added a secure payment system and optimized my product pages for mobile!",
      author: "Zachary Lin",
      role: "Fashion Store Owner",
      rating: 5
    },
    {
      text: "The design, branding, and overall layout were all on point — highly recommended!",
      author: "Chioma Okoye",
      role: "Digital Coach",
      rating: 5
    },
    {
      text: "I was lost in digital marketing until Oladele stepped in. He knows his stuff!",
      author: "Nathan Grey",
      role: "Startup Founder",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what my clients say about working with me
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary-glow fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl font-medium text-foreground mb-8 leading-relaxed">
                "{currentTest.text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div>
                  <p className="font-semibold text-lg text-primary">
                    {currentTest.author}
                  </p>
                  <p className="text-muted-foreground">
                    {currentTest.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary shadow-lg' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;