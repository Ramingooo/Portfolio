import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Core Languages",
      skills: ["C", "C++", "JavaScript", "Lua", "Dart"]
    },
    {
      title: "Web & Modern Stack",
      skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Mobile & Specialized",
      skills: ["Flutter", "Git", "Docker", "Unix/Linux", "Algorithm Design"]
    },
    {
      title: "Academic Focus",
      skills: ["Calculus", "Linear Algebra", "Discrete Math", "Logic", "Mathematical Logic"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="h2-title">Mastered Stack & Academia</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-zinc-300 font-mono text-xs uppercase tracking-[0.3em] font-bold border-b border-zinc-800 pb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#10b981", 
                    color: "#000",
                    transition: { duration: 0.2 }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
