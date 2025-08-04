import { useEffect, useState } from 'react';
import { CheckCircle, Users, Target, Lightbulb, Clock, MessageSquare, Heart, Zap } from 'lucide-react';

const ProfessionalQualities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const qualities = [
    { 
      title: "Strong Communication & Collaboration", 
      icon: MessageSquare, 
      color: "bg-blue-500" 
    },
    { 
      title: "Detail Oriented & Organized", 
      icon: CheckCircle, 
      color: "bg-green-500" 
    },
    { 
      title: "Creative Problem-Solving", 
      icon: Lightbulb, 
      color: "bg-yellow-500" 
    },
    { 
      title: "Adaptable in Fast-Paced Environments", 
      icon: Zap, 
      color: "bg-purple-500" 
    },
    { 
      title: "Reliable with Time Management", 
      icon: Clock, 
      color: "bg-indigo-500" 
    },
    { 
      title: "Open to Feedback & Continuous Learning", 
      icon: Users, 
      color: "bg-teal-500" 
    },
    { 
      title: "Client Focused Mindset", 
      icon: Target, 
      color: "bg-red-500" 
    },
    { 
      title: "Passionate About Building Brands", 
      icon: Heart, 
      color: "bg-pink-500" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(qualities.length / 3));
    }, 3000);

    return () => clearInterval(interval);
  }, [qualities.length]);

  const getVisibleQualities = () => {
    const start = currentSlide * 3;
    return qualities.slice(start, start + 3);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Professional Qualities
          </h2>
          <p className="text-muted-foreground">
            The personal traits that drive my professional excellence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[180px]">
            {getVisibleQualities().map((quality, index) => {
              const IconComponent = quality.icon;
              return (
                <div 
                  key={`${quality.title}-${currentSlide}`}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in border border-border/50"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${quality.color} flex items-center justify-center text-white shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground leading-tight">
                    {quality.title}
                  </h3>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(qualities.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary shadow-lg' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalQualities;