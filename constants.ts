import { Experience, Project, Skill } from './types';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: 'Instructional Designer & AI Author',
    company: 'Studi',
    location: 'Montpellier (Remote)',
    period: 'Jun 2025 - Nov 2025',
    description: [
      'Designed and deployed e-learning modules on Artificial Intelligence development.',
      'Developed progressive learning paths in Data Science and Deep Learning (Tensorflow, Pytorch).',
      'Implemented capstone projects combining computer vision and content generation.'
    ],
    tags: ['AI', 'Education', 'Python', 'Tensorflow']
  },
  {
    id: '2',
    role: 'Software Developer & UX Researcher',
    company: 'Super Annotate via OpenTrain AI',
    location: 'Remote USA',
    period: 'Oct 2024 - Present',
    description: [
      'Collaborated with cross-functional teams to refine AI reasoning algorithms, boosting accuracy by 40%.',
      'Conducted research-driven UX evaluation of digital interactions through structured questioning.',
      'Optimized visual hierarchy and interactive elements using frontend technologies.'
    ],
    tags: ['UX Research', 'Frontend', 'AI Training', 'Data Annotation']
  },
  {
    id: '3',
    role: 'Front-end Web Developer',
    company: 'Confluence Transports',
    location: 'Lyon, France',
    period: 'Dec 2020 - Dec 2024',
    description: [
      'Designed scalable UI components for web and mobile (React.js, React Native).',
      'Led migration of ERP solutions reducing downtime by 15%.',
      'Conducted user research driving a 30% increase in product satisfaction.'
    ],
    tags: ['React', 'React Native', 'UI Systems', 'ERP']
  },
  {
    id: '4',
    role: 'Video Game Developer & Designer',
    company: 'Epitaph Studios',
    location: 'Lyon, France',
    period: 'Jun 2016 - Present',
    description: [
      'Built multidisciplinary expertise in Unreal Engine, blending gameplay with high-quality visuals.',
      'Crafted impactful aesthetic visuals and modern responsive websites.',
      'Approached projects holistically ensuring harmony between design and functionality.'
    ],
    tags: ['Unreal Engine 5', '3D Design', 'Game Dev', 'Indie']
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    category: 'Development',
    items: ['React.js', 'TypeScript', 'Unreal Engine 5', 'Python', 'C#', 'HTML/CSS']
  },
  {
    category: 'Design & 3D',
    items: ['Plasticity', 'Blender', 'Adobe Suite', 'Figma', 'UI/UX', 'Motion Design']
  },
  {
    category: 'AI & Data',
    items: ['Generative AI', 'Prompt Engineering', 'Tensorflow', 'Pandas', 'Data Analysis']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Neon Horizon',
    category: 'Game Development',
    description: 'An immersive cyberpunk racing prototype built in Unreal Engine 5 using Lumen and Nanite.',
    image: 'https://picsum.photos/800/600?random=1',
    tech: ['UE5', 'C++', 'Blueprints']
  },
  {
    id: 'p2',
    title: 'Velora ERP',
    category: 'Web Application',
    description: 'A high-performance internal management system with a glassmorphic UI design system.',
    image: 'https://picsum.photos/800/600?random=2',
    tech: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 'p3',
    title: 'AI Learning Hub',
    category: 'Education Tech',
    description: 'Interactive platform for learning Deep Learning concepts with real-time code execution.',
    image: 'https://picsum.photos/800/600?random=3',
    tech: ['Python', 'Next.js', 'Tensorflow']
  }
];