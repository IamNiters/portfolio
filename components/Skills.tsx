import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Cpu, Code2, Palette } from 'lucide-react';

const getIcon = (category: string) => {
  switch (category) {
    case 'Development': return <Code2 className="text-blue-400" />;
    case 'Design & 3D': return <Palette className="text-purple-400" />;
    default: return <Cpu className="text-pink-400" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skillSet, idx) => (
            <div 
              key={skillSet.category}
              className="glass-panel p-8 rounded-3xl hover:border-white/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(skillSet.category)}
                </div>
                <h3 className="text-xl font-bold text-white">{skillSet.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillSet.items.map((item) => (
                  <div 
                    key={item}
                    className="px-4 py-2 rounded-lg bg-[#050510]/50 border border-white/5 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-colors cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};