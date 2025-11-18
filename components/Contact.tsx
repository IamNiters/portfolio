import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-neon-blue/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel rounded-[2rem] p-8 md:p-20 overflow-hidden relative border border-white/10 shadow-2xl">
          
          {/* Holographic Sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Left: Context */}
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-6">
                <span className="px-3 py-1 rounded border border-neon-purple/30 bg-neon-purple/10 text-xs font-mono text-neon-purple tracking-widest uppercase">
                  Open for work
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Let's Build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Future Together</span>
              </h2>
              
              <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
                Have a vision that needs realizing? I bridge the gap between complex backend logic and fluid, immersive frontend design.
              </p>

              <div className="space-y-8">
                <ContactItem icon={<Mail />} text="ismael.bernard69@gmail.com" href="mailto:ismael.bernard69@gmail.com" />
                <ContactItem icon={<Linkedin />} text="linkedin.com/in/ismaelbernard" href="https://www.linkedin.com/in/ismaelbernard/" />
                <ContactItem icon={<MapPin />} text="Lyon, France (Remote)" />
              </div>
            </div>

            {/* Right: Liquid Form */}
            <form className="relative space-y-8 bg-white/5 p-10 rounded-3xl border border-white/5 backdrop-blur-xl shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Identity" placeholder="John Doe" type="text" />
                <InputGroup label="Coordinates" placeholder="john@example.com" type="email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-mono ml-1">Transmission</label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-0 group-focus-within:opacity-50 transition duration-500"></div>
                  <textarea 
                    rows={4}
                    className="relative w-full bg-[#0a0a12] border border-white/10 rounded-lg p-4 text-white placeholder-gray-700 focus:outline-none focus:bg-[#0f0f1a] transition-colors resize-none"
                    placeholder="Describe your project parameters..."
                  />
                </div>
              </div>

              <button 
                type="button" 
                className="w-full py-5 rounded-lg bg-gradient-to-r from-neon-blue via-blue-600 to-neon-purple text-white font-bold tracking-widest hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group uppercase font-display text-sm"
              >
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Transmit Message
              </button>
            </form>
          </div>
        </div>
        
        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-mono border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} ISMAEL BERNARD. SYSTEM ONLINE.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-blue transition-colors">TERMS</a>
            <a href="#" className="hover:text-neon-blue transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-neon-blue transition-colors">STATUS</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href?: string }) => (
  <div className="flex items-center gap-6 group cursor-pointer" onClick={() => href && window.open(href, '_blank')}>
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-neon-blue group-hover:border-neon-blue/50 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] transition-all duration-300">
      {icon}
    </div>
    <span className="text-gray-300 group-hover:text-white transition-colors text-sm tracking-wide font-medium">{text}</span>
  </div>
);

const InputGroup = ({ label, placeholder, type }: { label: string, placeholder: string, type: string }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-mono ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-0 group-focus-within:opacity-50 transition duration-500"></div>
      <input 
        type={type} 
        className="relative w-full bg-[#0a0a12] border border-white/10 rounded-lg p-4 text-white placeholder-gray-700 focus:outline-none focus:bg-[#0f0f1a] transition-colors"
        placeholder={placeholder}
      />
    </div>
  </div>
);