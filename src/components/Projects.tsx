import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Primowears Fashion Store",
      description: "Modern fashion eCommerce platform featuring trendy clothing collections, seamless checkout process, and responsive design for optimal shopping experience.",
      image: project1Image,
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Swimwear Shopify Store",
      description: "Complete eCommerce solution with trend research, branded design, and mobile-optimized shopping experience for a premium swimwear brand.",
      image: project2Image,
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Children's Bookstore on Wix",
      description: "Engaging storytelling website with responsive layout, secure checkout, and interactive features designed for young readers and parents.",
      image: project3Image,
      technologies: ["Wix", "Wix Code", "Database", "SEO Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Restaurant Booking Site",
      description: "Professional restaurant website with integrated reservation system, modern UI, and seamless customer booking experience.",
      image: project1Image,
      technologies: ["Custom HTML/CSS", "JavaScript", "Booking System", "Mobile Responsive"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, 
              design, and problem-solving.
            </p>
          </div>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden ${
                  project.featured 
                    ? 'bg-gradient-to-br from-card to-accent-light/30' 
                    : 'bg-card/50'
                }`}
              >
                <CardContent className="p-0">
                  <div className={`grid gap-8 items-center ${
                    index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                  }`}>
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <div className="relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    
                    <div className={`p-8 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      {project.featured && (
                        <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow">
                          Featured Project
                        </Badge>
                      )}
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <Button 
                          asChild
                          className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;