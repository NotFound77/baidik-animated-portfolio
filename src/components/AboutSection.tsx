import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cards animation
    gsap.fromTo(cardsRef.current?.children,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Problem Solver",
      description: "I love breaking down complex problems and finding elegant solutions through clean, efficient code."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Thinker", 
      description: "Always exploring new technologies and methodologies to create innovative user experiences."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Continuous Learner",
      description: "Passionate about staying updated with the latest trends and best practices in software development."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Focused",
      description: "Committed to writing optimized code that delivers fast, responsive, and scalable applications."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Text Content */}
          <div ref={contentRef}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Hello! I'm Baidik Das
            </h3>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                I am a passionate software developer with a love for creating innovative web experiences 
                and solving complex problems through clean, efficient code. My journey in programming 
                began with curiosity and has evolved into a deep appreciation for the art of software development.
              </p>
              <p>
                With expertise in multiple programming languages and a keen eye for detail, I enjoy 
                transforming ideas into functional, user-friendly applications. I believe in writing 
                code that not only works but is also maintainable, scalable, and elegant.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always excited to take on 
                new challenges and collaborate on innovative projects.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Experience</h3>
            <div className="space-y-4">
              <div className="portfolio-card">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Software Developer</h4>
                    <p className="text-sm text-primary mb-2">2025 - Present</p>
                    <p className="text-foreground-secondary text-sm">
                      Developing full-stack web applications using modern technologies and frameworks.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-card">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Computer Science Student</h4>
                    <p className="text-sm text-secondary mb-2">2022 - Present</p>
                    <p className="text-foreground-secondary text-sm">
                      Focused on algorithms, data structures, and software engineering principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="portfolio-card text-center group">
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {highlight.title}
              </h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;