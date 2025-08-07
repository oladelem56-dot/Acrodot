import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, Globe, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Shopify Store Design",
      description: "Custom Shopify stores built for conversion with modern design, optimized checkout flows, and mobile-first approach.",
      features: ["Custom Theme Development", "Mobile Optimization", "Speed Optimization", "Payment Integration"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Wix Store + Landing Pages",
      description: "Professional Wix stores and high-converting landing pages designed to capture leads and drive sales.",
      features: ["Landing Page Design", "Lead Generation", "SEO Optimization", "Brand Integration"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Product Research & Strategy",
      description: "Data-driven product research and strategic planning to identify winning products and market opportunities.",
      features: ["Market Analysis", "Competitor Research", "Product Validation", "Growth Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to conversion, we provide comprehensive eCommerce solutions 
            that drive real business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-card border border-border">
              <div className="text-accent mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;