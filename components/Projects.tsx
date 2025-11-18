import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Works</span>
            </h2>
            <p className="text-gray-400 max-w-md font-light">
              Immersive digital experiences spanning game design, web apps, and AI.
            </p>
          </div>
          <button className="group px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-neon-purple/50 transition-all text-sm text-white font-mono tracking-wider flex items-center gap-2">
            GITHUB_REPO <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id}
              className="group relative h-[500px] rounded-2xl overflow-hidden bg-[#0a0a12] border border-white/5 hover:border-white/20 transition-colors duration-500"
            >
              {/* Background Image with Parallax feel */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 filter grayscale-[50%] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Content Overlay - Fluid Reveal */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                
                {/* Top Badge */}
                <div className="absolute top-6 right-6 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-neon-blue/20 hover:border-neon-blue/50 cursor-pointer transition-colors">
                     <ExternalLink size={20} className="text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs font-mono text-neon-blue mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    // {project.category}
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((t, i) => (
                      <span 
                        key={t} 
                        className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded border border-white/10 bg-black/40 text-gray-400 group-hover:border-white/20 group-hover:text-white transition-colors delay-75"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-2xl transition-colors duration-500 pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};