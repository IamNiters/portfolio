import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowRight, MousePointer2 } from 'lucide-react';

// Simple noise function helper
const noise = (x: number, y: number, z: number) => {
  return Math.sin(x * 2 + z * 1.5) * Math.cos(y * 2 + x * 1.5) * Math.sin(z * 2 + y * 1.5);
};

export const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 3.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0x00f3ff, 20);
    spotLight.position.set(5, 5, 5);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    const purpleLight = new THREE.PointLight(0xbc13fe, 10);
    purpleLight.position.set(-5, -5, 5);
    scene.add(purpleLight);

    // Liquid Blob Geometry
    const geometry = new THREE.IcosahedronGeometry(1.2, 60); // High detail
    const originalPositions = Float32Array.from(geometry.attributes.position.array);
    
    // Liquid Glass Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.95, // Glass
      thickness: 1.5,
      ior: 1.45,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide,
    });

    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    // Background Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x888888,
      transparent: true,
      opacity: 0.4,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation Loop
    let time = 0;
    
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Distort Blob
      const positions = blob.geometry.attributes.position.array;
      const normals = blob.geometry.attributes.normal.array;

      for (let i = 0; i < originalPositions.length; i += 3) {
        // Base position
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];

        // Noise-based displacement
        const n = noise(x + time * 0.5, y + time * 0.3, z + time * 0.5);
        const displacement = n * 0.4; // Strength

        // Interactive displacement
        const distToMouse = Math.sqrt(
          Math.pow(x - mouseRef.current.x * 2, 2) + 
          Math.pow(y + mouseRef.current.y * 2, 2)
        );
        const mouseInfluence = Math.max(0, 1 - distToMouse) * 0.3;

        positions[i] = x + (normals[i] * (displacement + mouseInfluence));
        positions[i + 1] = y + (normals[i + 1] * (displacement + mouseInfluence));
        positions[i + 2] = z + (normals[i + 2] * (displacement + mouseInfluence));
      }
      
      blob.geometry.attributes.position.needsUpdate = true;
      
      // Rotate Blob
      blob.rotation.y += 0.002;
      blob.rotation.x += 0.001;
      blob.rotation.x += (mouseRef.current.y * 0.5 - blob.rotation.x) * 0.05;
      blob.rotation.y += (mouseRef.current.x * 0.5 - blob.rotation.y) * 0.05;

      // Rotate Particles
      particlesMesh.rotation.y = -time * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 overflow-hidden">
      
      {/* Text Content - Left/Top on Mobile, Left on Desktop */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center h-full">
        
        <div className="w-full md:w-1/2 text-center md:text-left pt-10 md:pt-0">
          
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass-200 border border-glass-border backdrop-blur-md mb-8 animate-float shadow-[0_0_15px_rgba(0,243,255,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse shadow-[0_0_8px_#0aff68]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neon-green">System Online</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white">Digital</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Architect</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
            Merging <span className="text-neon-blue">liquid design</span> with <span className="text-neon-purple">neural intelligence</span>. 
            I build immersive web experiences that behave like living organisms.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-6">
            <a 
              href="#work"
              className="group relative px-8 py-4 bg-white text-black rounded-lg font-bold tracking-wide overflow-hidden flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE WORK <ArrowRight size={18} />
              </span>
            </a>

            <a 
              href="#contact"
              className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-neon-blue/50 transition-all text-white flex items-center gap-2 tracking-wide hover:shadow-[0_0_15px_rgba(0,243,255,0.15)]"
            >
              INITIATE CONTACT
            </a>
          </div>
        </div>

        {/* 3D Canvas - Full screen absolute or right side */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen absolute md:relative top-0 left-0 md:inset-auto z-0 md:z-0 opacity-60 md:opacity-100 pointer-events-none md:pointer-events-auto">
           <div ref={mountRef} className="w-full h-full" />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-pulse-slow z-20">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll_Depth</span>
        <MousePointer2 size={14} />
      </div>
    </section>
  );
};