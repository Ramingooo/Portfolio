import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code, Globe, GraduationCap } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-pulse delay-700" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-primary text-xs font-mono mb-8 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]">
             <Code className="w-3 h-3" />
             <span>Software & Web Developer</span>
             <span className="w-1 h-1 bg-zinc-700 rounded-full mx-1"></span>
             <GraduationCap className="w-3 h-3" />
             <span>Math Student @ FSSM</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            I'm <span className="text-white">Adam Elkahlaoui</span>. <br />
            Transforming Logic <br />
            Into <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Powerful Code.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
            I'm a 2nd-year Math student at <span className="text-white font-medium italic">FSSM</span>, 
            mastering the art of <span className="text-white underline decoration-primary/50 underline-offset-4">Software & Web Development</span>. 
            My next milestone? Joining the elite rank of <span className="text-primary font-mono font-bold">1337</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 rounded-xl bg-primary text-background font-bold hover:bg-emerald-400 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="flex items-center gap-2 relative z-10">
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <div className="flex items-center gap-4 text-white">
              <a 
                href="https://github.com/Ramingooo" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-xl glass hover:bg-zinc-800/80 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/adam-elkahlaoui-237144324/" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-xl glass hover:bg-zinc-800/80 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating elements for "creative" feel */}
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="hidden lg:block absolute -right-20 top-0 opacity-20"
        >
          <Globe className="w-64 h-64 text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
