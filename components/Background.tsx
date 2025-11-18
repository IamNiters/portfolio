import React, { useEffect, useRef } from 'react';

export const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20;
      const y = (clientY / window.innerHeight) * 20;
      
      containerRef.current.style.backgroundPosition = `${x}px ${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#030305] pointer-events-none overflow-hidden">
      {/* Radial Gradient Fade for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0a0a12] via-[#030305] to-[#030305] opacity-80" />

      {/* Animated Dot Matrix */}
      <div 
        ref={containerRef}
        className="absolute inset-0 dot-matrix-bg opacity-20 transition-transform duration-100 ease-out scale-110"
        style={{ willChange: 'background-position' }}
      />
      
      {/* Ambient Light Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30 animate-pulse-slow animation-delay-2000" />
    </div>
  );
};