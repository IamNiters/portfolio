import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Professional <span className="text-purple-400">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A timeline of my career across instructional design, AI development, and full-stack engineering.
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#050510] border-2 border-purple-500 rounded-full z-10 mt-6">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20" />
              </div>

              {/* Content Card */}
              <div className="md:w-1/2 pl-12 md:pl-0">
                <div className={`glass-panel p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-purple-300 font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-end text-xs text-gray-400 gap-1">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {job.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="block min-w-[4px] h-[4px] rounded-full bg-blue-400 mt-2" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty space for alignment */}
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};