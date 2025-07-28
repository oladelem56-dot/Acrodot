import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Digital Strategy",
      skills: ["SEO/SEM", "Social Media Marketing", "Content Strategy", "Brand Management", "Campaign Planning", "Market Research", "Competitor Analysis", "Growth Hacking"]
    },
    {
      title: "Analytics & Tools",
      skills: ["Google Analytics", "Google Ads", "Facebook Ads", "LinkedIn Ads", "HubSpot", "Mailchimp", "Hootsuite", "Canva"]
    },
    {
      title: "Content Creation",
      skills: ["Copywriting", "Email Marketing", "Blog Writing", "Video Marketing", "Graphic Design", "Photography", "Storytelling", "Brand Voice"]
    },
    {
      title: "Technical Skills",
      skills: ["WordPress", "HTML/CSS", "Landing Pages", "A/B Testing", "CRM Management", "Marketing Automation", "Lead Generation", "Conversion Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-accent-light/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I leverage diverse digital marketing tools and strategies to drive growth and maximize ROI for businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 border border-border/50"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">
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