import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-tertiary border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="flex items-center text-foreground-secondary text-sm mb-4 md:mb-0">
            <span>© {currentYear} Baidik Das. Made with</span>
            <Heart className="w-4 h-4 mx-1 text-primary fill-current" />
            <span>and lots of coffee.</span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground-secondary hover:text-primary transition-colors"
            >
              Back to Top
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="text-foreground-secondary hover:text-primary transition-colors"
            >
              Resume
            </a>
            <a 
              href="mailto:baidik.das@example.com"
              className="text-foreground-secondary hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;