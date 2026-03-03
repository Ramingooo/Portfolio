import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Target, Terminal } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-secondary" />,
      title: "Math Student @ FSSM",
      subtitle: "Academic Rigor",
      description: "My studies in Marrakech provide the logical depth needed for complex problem solving."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Goal: 1337 Student",
      subtitle: "Next Chapter",
      description: "Working hard to enter the peer-to-peer coding world of 1337 to refine my software engineering skills."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="h2-title leading-tight">Bridging Pure Mathematics <br />with Modern Engineering.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            I'm a developer who doesn't just write code; I architect systems with mathematical precision. 
            Currently navigating my 2nd year at <span className="text-white">FSSM</span>, I spend my free time mastering the modern web and software development landscape.
          </p>
          <p className="text-zinc-500 italic">
            "Software is the applied form of mathematical logic."
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass p-10 rounded-3xl group border-zinc-800/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-zinc-900 mb-6 w-fit group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-primary text-xs font-mono uppercase tracking-[0.2em] mb-4 opacity-70">{card.subtitle}</p>
              <p className="text-zinc-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
