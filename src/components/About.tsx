import { Card, CardContent } from '@/components/ui/card';
import { Target, PenTool, BarChart3 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a digital marketer and eCommerce designer helping businesses grow online through full-service store design and digital strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">eCommerce Design</h3>
                <p className="text-muted-foreground">
                  Shopify and Wix websites, dropshipping stores, children's bookstores, booking and restaurant websites, beauty and fashion brands.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <PenTool className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Digital Marketing</h3>
                <p className="text-muted-foreground">
                  Social media marketing, ad campaigns (Facebook, Instagram, Google), email marketing and automation, conversion optimization.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Business Services</h3>
                <p className="text-muted-foreground">
                  Product research, payment gateway integration, review management, strategic planning and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">My Approach</h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  I specialize in creating comprehensive eCommerce solutions that combine beautiful design with strategic marketing. 
                  Whether you need a high-converting Shopify store, a stunning Wix website, or a complete digital marketing strategy, 
                  I bring expertise in both technical implementation and creative strategy. My goal is to help businesses not just 
                  establish an online presence, but to thrive in the digital marketplace through optimized user experiences and 
                  data-driven marketing campaigns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;