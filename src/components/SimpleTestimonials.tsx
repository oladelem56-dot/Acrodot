import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const SimpleTestimonials = () => {
  const testimonials = [
    {
      text: "Acrodot transformed our online store completely. Sales increased by 180% in just 3 months!",
      author: "Sarah Johnson",
      role: "Founder, Fashion Boutique",
      rating: 5
    },
    {
      text: "Professional, efficient, and results-driven. Our Shopify store now converts 3x better than before.",
      author: "Mike Chen", 
      role: "CEO, Tech Gadgets Store",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;