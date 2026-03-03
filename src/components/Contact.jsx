import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="glass p-12 rounded-[2rem] border-zinc-800 text-center flex flex-col items-center">
        <div className="p-4 bg-primary/10 rounded-2xl mb-6">
          <MessageSquare className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <br />extraordinary.</h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
          Whether it's a complex algorithm, a scalable web app, or just a chat about mathematics, my inbox is always open.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-6 py-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-primary transition-colors text-zinc-100"
          />
          <button className="px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all group">
            Say Hello
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-zinc-800/50 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-mono tracking-tight">ramingooo8@gmail.com</span>
          </div>
          <p className="text-zinc-600 text-sm font-mono text-center md:text-right">
            &copy; {new Date().getFullYear()} Adam Elkahlaoui — Built with React & Tailwind
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
