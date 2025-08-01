import { Users, Brain, Eye, Wrench, Lightbulb, MessageCircle } from 'lucide-react';

const PersonalQualities = () => {
  const qualities = [
    {
      title: "Teamwork",
      icon: Users,
      description: "Collaborative approach to every project"
    },
    {
      title: "Strategic Thinking",
      icon: Brain,
      description: "Data-driven solutions for long-term growth"
    },
    {
      title: "Attention to Detail",
      icon: Eye,
      description: "Meticulous execution of every element"
    },
    {
      title: "Problem Solving",
      icon: Wrench,
      description: "Creative solutions to complex challenges"
    },
    {
      title: "Creativity",
      icon: Lightbulb,
      description: "Innovative designs that stand out"
    },
    {
      title: "Communication",
      icon: MessageCircle,
      description: "Clear, transparent project updates"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            What Makes Me Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond technical skills, I bring these core qualities to every project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {qualities.map((quality, index) => {
            const IconComponent = quality.icon;
            return (
              <div 
                key={quality.title}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-300 border border-border/50 hover:shadow-lg group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground">
                  {quality.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalQualities;