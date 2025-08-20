import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Web Technologies', 
      skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express']
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Git', 'GSAP', 'Tailwind CSS', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Concepts',
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
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="portfolio-card">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div ref={progressRef} className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="portfolio-card">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-primary font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-background-tertiary rounded-full h-3 overflow-hidden">
                  <div 
                    className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300 shadow-glow`}
                    data-width={skill.level}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Skill Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[...categories.flatMap(cat => cat.skills)].map((tech, index) => (
              <span 
                key={index}
                className="skill-badge hover:shadow-glow cursor-default"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  fontSize: `${Math.random() * 0.5 + 0.8}rem`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;