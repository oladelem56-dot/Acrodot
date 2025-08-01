import { useEffect, useState } from 'react';

const SkillsSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const skills = [
    { name: "Shopify", icon: "🛍️", color: "bg-green-500" },
    { name: "Wix", icon: "🎨", color: "bg-blue-500" },
    { name: "Dropshipping", icon: "📦", color: "bg-purple-500" },
    { name: "Facebook Ads", icon: "📘", color: "bg-blue-600" },
    { name: "Instagram Marketing", icon: "📸", color: "bg-pink-500" },
    { name: "Google Ads", icon: "🎯", color: "bg-red-500" },
    { name: "Mailchimp", icon: "📧", color: "bg-yellow-500" },
    { name: "Canva", icon: "🎭", color: "bg-teal-500" },
    { name: "Email Marketing", icon: "✉️", color: "bg-indigo-500" },
    { name: "Social Media Management", icon: "📱", color: "bg-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(skills.length / 3));
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const getVisibleSkills = () => {
    const start = currentSlide * 3;
    return skills.slice(start, start + 3);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            My Expertise
          </h2>
          <p className="text-muted-foreground">
            Platforms and tools I use to help your business grow
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[160px]">
            {getVisibleSkills().map((skill, index) => (
              <div 
                key={`${skill.name}-${currentSlide}`}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in border border-border/50"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${skill.color} flex items-center justify-center text-2xl text-white shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(skills.length / 3) }).map((_, index) => (
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

export default SkillsSlideshow;