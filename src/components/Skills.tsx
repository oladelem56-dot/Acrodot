import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Marketing & Strategy",
      skills: ["SEO/SEM", "Ad Campaigns", "Digital Strategy", "Review Management"]
    },
    {
      title: "eCommerce Services",
      skills: ["Shopify", "Wix", "Dropshipping", "Product Research", "Payment Integration"]
    },
    {
      title: "Tools & Tech",
      skills: ["Canva", "Mailchimp", "Meta Ads", "Google Analytics"]
    },
    {
      title: "Content & Branding",
      skills: ["Copywriting", "Brand Voice", "Social Media Posts", "Email Content"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-accent-light/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-accent">
              Core Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organized by expertise areas to deliver comprehensive eCommerce and marketing solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 border border-border/50"
              >
                <h3 className="text-xl font-bold mb-6 text-accent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;