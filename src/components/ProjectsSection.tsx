import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Zap, Palette, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      icon: <Database className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and collaborative features for team productivity.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, animated portfolio website showcasing responsive design principles and smooth GSAP animations. Built with performance and accessibility in mind.",
      technologies: ["React", "TypeScript", "GSAP", "Tailwind CSS", "Vite"],
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-pink-500 to-orange-500",
      demoUrl: "#",
      githubUrl: "#"
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

                  {/* Project Preview Placeholder */}
                  <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          {project.icon}
                        </div>
                        <p className="text-lg font-semibold">Project Preview</p>
                        <p className="text-sm opacity-80">Click to view details</p>
                      </div>
                    </div>
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
            href="https://github.com"
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