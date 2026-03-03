import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// 1. IMPORT your images here like this:
// import project1Img from '../assets/my-project-1.png';

const Projects = () => {
  const projects = [
    {
      title: "chi 7aja",
      description: "In progress...",
      tags: ["C++", "React", "PostgreSQL"],
      link: "#", // 2. ADD YOUR LINK HERE
      github: "#", // 2. ADD YOUR GITHUB HERE
      image: null // 3. REPLACE 'null' with 'project1Img' after importing
    },
    {
      title: "Minishell",
      description: "A simplified shell implementation handling pipes and signals.",
      tags: ["C", "Unix", "Algorithms"],
      link: "#",
      github: "#",
      image: null
    },
    {
      title: "Math Visualizer",
      description: "Visualization tool for complex mathematical functions.",
      tags: ["React", "Three.js", "Math"],
      link: "#",
      github: "#",
      image: null
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="h2-title">Selected Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300"
          >
            {/* Project Image Wrapper */}
            <div className="h-52 bg-zinc-800 relative overflow-hidden">
               {project.image ? (
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                 />
               ) : (
                 <div className="flex items-center justify-center h-full text-zinc-700 font-mono text-xl bg-gradient-to-br from-zinc-900 to-zinc-800">
                   /{project.title.toLowerCase()}
                 </div>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-[0.15em] text-zinc-500 bg-zinc-800/30 border border-zinc-700/30 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Github className="w-5 h-5" /> Code
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <ExternalLink className="w-5 h-5" /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
