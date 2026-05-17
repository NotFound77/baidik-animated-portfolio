import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Zap, Palette, Database, Sparkles, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "AI Interface",
      description: "An intelligent AI-powered interface application designed for seamless interaction with advanced language models. Features real-time responses, conversation management, and an intuitive user experience.",
      technologies: ["React", "TypeScript", "AI APIs", "Tailwind CSS", "Vite"],
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      demoUrl: "https://ai-interface-zaaq.vercel.app/",
      githubUrl: "https://github.com/NotFound77/AI_interface.git"
    },
    {
      title: "Insight Mind Guide",
      description: "A comprehensive mind guide application that provides personalized insights and meditation resources. Designed to help users maintain mental wellness through guided experiences and mindfulness tools.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-indigo-500 to-cyan-600",
      demoUrl: "https://insight-mind-guide.vercel.app/",
      githubUrl: "https://github.com/NotFound77/insight-mind-guide.git"
    }
  ];

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

    // Projects animation
    gsap.fromTo(projectsRef.current?.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Featured Projects
        </h2>

        <div ref={projectsRef} className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-card group cursor-pointer overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-8 items-center">
                {/* Project Icon & Info */}
                <div className="md:col-span-2 text-center md:text-left">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={project.demoUrl}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:scale-105 transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-card-border text-foreground-secondary hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Technologies & Visual */}
                <div className="md:col-span-3">
                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="skill-badge text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Preview Iframe */}
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-background-secondary to-background relative overflow-hidden group-hover:shadow-strong transition-all duration-300 border border-card-border/50">
                    <iframe 
                      src={project.demoUrl}
                      title={`${project.title} Live Demo`}
                      className="w-full h-full rounded-lg"
                      loading="lazy"
                      allowFullScreen
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-primary/30 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground-secondary mb-6">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/NotFound77"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;