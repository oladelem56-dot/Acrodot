import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
              Oladele Abiodun Moses
            </h3>
            <p className="text-muted-foreground max-w-md">
              Helping businesses grow through strategic digital marketing and creative content solutions.
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
              href="mailto:oladele@example.com"
              className="text-muted-foreground hover:text-primary transition-colors p-3 hover:scale-110 transform duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Oladele Abiodun Moses</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;