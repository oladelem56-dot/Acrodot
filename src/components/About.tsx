import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate digital marketing specialist with expertise in driving online growth and engagement. 
              With a deep understanding of digital trends and consumer behavior, I help businesses reach their target audience effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategy</h3>
                <p className="text-muted-foreground">
                  Data-driven marketing strategies that align with business goals. 
                  Creating comprehensive campaigns that deliver measurable results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Content</h3>
                <p className="text-muted-foreground">
                  Compelling content creation that resonates with target audiences. 
                  Crafting messages that engage, inform, and convert.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Analytics</h3>
                <p className="text-muted-foreground">
                  Performance tracking and optimization. Using data insights to 
                  continuously improve campaign effectiveness and ROI.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-accent-light/30 to-accent-light/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              With several years of experience in digital marketing, I've helped businesses of all sizes 
              build their online presence and drive meaningful engagement with their audiences. 
              I believe in data-driven strategies and creating authentic connections between brands and customers. 
              When I'm not crafting marketing campaigns, you'll find me staying up-to-date with the latest 
              digital trends, analyzing market insights, or exploring creative content ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;