import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Zap, Terminal, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Python', level: 90, color: 'from-[#3776ab] to-[#ffd43b]' },
    { name: 'Java', level: 85, color: 'from-[#f89820] to-[#ed8b00]' },
    { name: 'C', level: 80, color: 'from-[#00599c] to-[#004482]' },
    { name: 'JavaScript', level: 88, color: 'from-[#f7df1e] to-[#ffda00]' },
    { name: 'HTML', level: 95, color: 'from-[#e34f26] to-[#f06529]' },
    { name: 'CSS', level: 92, color: 'from-[#1572b6] to-[#33a9dc]' }
  ];

  const categories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Web Technologies', 
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-500',
      skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express']
    },
    {
      title: 'Tools & Frameworks',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['Git', 'GSAP', 'Tailwind CSS', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Concepts',
      icon: <Lightbulb className="w-6 h-6" />,
      gradient: 'from-green-500 to-teal-500',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'RESTful APIs', 'Responsive Design']
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

    // Skills categories animation
    gsap.fromTo(skillsRef.current?.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Progress bars animation
    gsap.fromTo(progressRef.current?.querySelectorAll('.progress-bar'),
      { width: '0%' },
      {
        width: (i, target) => target.getAttribute('data-width') + '%',
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: progressRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-container bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Skills & Expertise
        </h2>

        {/* Skills Categories */}
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative portfolio-card overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon container */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{
                backgroundImage: `linear-gradient(to right, var(--color-start), var(--color-end))`,
              }}>
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-badge text-sm hover:scale-105 transition-transform duration-200 cursor-default"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div ref={progressRef} className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 gradient-text">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group portfolio-card hover:shadow-strong transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="relative w-full bg-background-tertiary rounded-full h-4 overflow-hidden shadow-inner">
                  <div 
                    className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300 shadow-lg group-hover:shadow-glow relative`}
                    data-width={skill.level}
                    style={{ width: '0%' }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Skill Cloud */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4 gradient-text">
            Technologies I Work With
          </h3>
          <p className="text-foreground-secondary mb-10 text-lg">
            A comprehensive stack of modern tools and frameworks
          </p>
          <div className="relative">
            {/* Background gradient blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl blur-3xl"></div>
            
            <div className="relative flex flex-wrap justify-center gap-3 max-w-5xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-background/50 to-background-secondary/50 backdrop-blur-sm border border-card-border/50">
              {[...categories.flatMap(cat => cat.skills)].map((tech, index) => (
                <span 
                  key={index}
                  className="skill-badge group cursor-default hover:shadow-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;