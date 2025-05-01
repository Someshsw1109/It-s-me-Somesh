
import React from 'react';

const skills = [
  { name: "Python", icon: "devicon-postgresql-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Machine Learning", icon: "devicon-docker-plain colored" },
  { name: "Artificial Intelligence", icon: "devicon-amazonwebservices-original colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-darker py-20">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-item animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-2">
                {/* Use a placeholder div for the skill icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-highlight/20 to-transparent rounded-lg text-highlight">
                  {skill.name.charAt(0)}
                </div>
                <span className="text-sm">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
