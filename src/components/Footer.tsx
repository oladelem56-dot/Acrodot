import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/6388e6f9-8340-4eac-8d3f-f1f80ef8e79e.png" 
                alt="ACRODOT Logo" 
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Oladele Abiodun Moses
              </h3>
            </div>
            <p className="text-muted-foreground max-w-md">
              Digital Marketer & eCommerce Website Designer
            </p>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-3 hover:scale-110 transform duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-3 hover:scale-110 transform duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:oladelem56@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-3 hover:scale-110 transform duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Oladele Abiodun Moses – Helping brands grow with purpose and strategy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;