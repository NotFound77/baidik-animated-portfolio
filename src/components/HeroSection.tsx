import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate title
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    // Animate subtitle
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    // Animate profile image
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.8, rotation: 10 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    // Animate CTA buttons
    .fromTo(ctaRef.current?.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    )
    // Animate social links
    .fromTo(socialRef.current?.children,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.2"
    );

  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    const email = 'baidik.das.kol@gmail.com';
    const subject = 'Contact from Portfolio';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Baidik Das
              </span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-foreground-secondary mb-8 leading-relaxed"
            >
              Software Developer passionate about creating innovative web experiences 
              and solving complex problems through code.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToAbout}
                className="btn-hero"
              >
                Explore My Work
              </button>
              <button 
                onClick={() => window.open('/resume.pdf')}
                className="px-8 py-4 rounded-full font-medium tracking-wide border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
              >
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex justify-center md:justify-start space-x-6">
              <a 
                href="https://github.com/NotFound77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-card-border hover:border-primary transition-[var(--transition-smooth)] hover:shadow-glow group"
              >
                <Github className="w-6 h-6 text-foreground-secondary group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/baidik-das-1437123b5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-card-border hover:border-primary transition-[var(--transition-smooth)] hover:shadow-glow group"
              >
                <Linkedin className="w-6 h-6 text-foreground-secondary group-hover:text-primary transition-colors" />
              </a>
              <button 
                onClick={handleEmailClick}
                className="p-3 rounded-full bg-card border border-card-border hover:border-primary transition-[var(--transition-smooth)] hover:shadow-glow group cursor-pointer"
              >
                <Mail className="w-6 h-6 text-foreground-secondary group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div 
              ref={imageRef}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <img 
                src="https://cdn.jsdelivr.net/gh/NotFound77/Images@main/f9da88a0-0197-41f0-8117-f53dac2aaf91.jpg" 
                alt="Baidik Das - Software Developer" 
                className="relative w-80 h-80 rounded-full object-cover object-[center_35%] border-4 border-card-border shadow-strong"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-foreground-muted hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;