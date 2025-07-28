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
              I'm a passionate full-stack developer with a love for creating exceptional digital experiences. 
              With expertise in modern web technologies and a keen eye for design, I help bring ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Development</h3>
                <p className="text-muted-foreground">
                  Clean, efficient code with modern frameworks and best practices. 
                  Always learning and adapting to new technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Design</h3>
                <p className="text-muted-foreground">
                  User-centered design principles with attention to detail. 
                  Creating interfaces that are both beautiful and functional.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-accent-light/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Performance</h3>
                <p className="text-muted-foreground">
                  Optimized solutions that scale. Fast, reliable, and 
                  maintainable code that delivers exceptional user experiences.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-accent-light/30 to-accent-light/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              With over 5 years of experience in web development, I've worked with startups and 
              established companies to build everything from simple landing pages to complex web applications. 
              I believe in writing clean, maintainable code and creating user experiences that make a difference. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or enjoying the outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;