
import React, { useState } from 'react';
import { Github, Link, Code } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment processing.",
    image: "https://swf-ecru.vercel.app/icons/logo.svg",
    demoUrl: "https://swf-ecru.vercel.app/",
    githubUrl: "https://github.com/Someshsw1109/SWF",
    tags: ["Next.js", "Express.js"]
  },
  {
    id: 2,
    title: "David",
    description: "A personal-assistant for windows-based systems with features.",
    image: "https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-professional-virtual-assistant-3d-illustration-png-image_10313099.png",
    demoUrl: "https://github.com/Someshsw1109/My-Personal-Assistant--David",
    githubUrl: "https://github.com/Someshsw1109/My-Personal-Assistant--David",
    tags: ["Python", "Machine Learning", "Artificial Intelligence"]
  },
  {
    id: 3,
    title: "Ecommerce Django",
    description: "A responsive Ecommerce website that displays all dairy products for any location.",
    image: "https://img.freepik.com/premium-vector/initial-dp-letter-logo-with-script-typography-vector-template-creative-script-letter-dp-logo-design_616200-713.jpg",
    demoUrl: "https://github.com/Someshsw1109/Ecommerce-Django",
    githubUrl: "https://github.com/Someshsw1109/Ecommerce-Django",
    tags: ["Python", "JavaScript", "CSS"]
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="bg-dark py-20">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag 
                ? "bg-highlight text-dark" 
                : "bg-darker text-gray-400 hover:text-highlight"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-darker text-gray-300 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-highlight hover:underline"
                  >
                    <Link size={16} className="mr-1" /> Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-highlight hover:underline"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Someshsw1109?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center border border-highlight text-highlight hover:bg-highlight/10 px-6 py-3 rounded-md font-medium"
          >
            <Code size={18} className="mr-2" /> View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
