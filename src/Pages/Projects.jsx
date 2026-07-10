import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'OPINIFI',
    subtitle: 'Finance Platform',
    description: 'A finance platform where users share opinions, earn rewards and brands gain insights. Features real-time analytics, user authentication, and interactive dashboards.',
    features: [
      'User opinion submission and voting system',
      'Real-time analytics dashboard',
      'Brand insights and reward mechanism',
      'JWT-based secure authentication',
      'Responsive design with Tailwind CSS'
    ],
    tags: ['React', 'Node', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/rahulthakur7655',
    live: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    color: '#14B8A6',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Chess Master',
    subtitle: 'Multiplayer Chess Game',
    description: 'Real-time chess game with online multiplayer, AI opponents, live leaderboard, and more. Built with Socket.IO for seamless real-time gameplay.',
    features: [
      'Real-time multiplayer using Socket.IO',
      'AI opponent with multiple difficulty levels',
      'Live leaderboard and ranking system',
      'Game history and replay feature',
      'Responsive board with drag & drop'
    ],
    tags: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
    github: 'https://github.com/rahulthakur7655',
    live: '#',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=60',
    color: '#6366F1',
    category: 'fullstack'
  },
  {
    id: 3,
    title: 'DocFormat',
    subtitle: 'Document Converter',
    description: 'Tool to convert unstructured text into SBSDS-compliant academic reports. Supports multiple document formats with AI-powered formatting.',
    features: [
      'Automated document formatting engine',
      'Multiple export formats (PDF, DOCX)',
      'AI-powered content structuring',
      'SBSDS compliance validation',
      'Batch processing support'
    ],
    tags: ['React', 'Node.js', 'Express', 'CSS3'],
    github: 'https://github.com/rahulthakur7655',
    live: '#',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60',
    color: '#F59E0B',
    category: 'tool'
  },
  {
    id: 4,
    title: 'StreamTube',
    subtitle: 'Video Streaming Platform',
    description: 'A YouTube-like video streaming platform with user authentication, video upload, real-time comments, subscriptions and personalized feeds.',
    features: [
      'Video upload and streaming',
      'User authentication & profiles',
      'Real-time comments and likes',
      'Subscription and notification system',
      'Search and recommendation engine'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/rahulthakur7655',
    live: '#',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=60',
    color: '#EC4899',
    category: 'fullstack'
  }
];

const categories = ['all', 'fullstack', 'tool'];

const Projects = () => {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Featured Projects
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A showcase of my best work — from full-stack web applications to developer tools.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-2.5 rounded-xl font-medium capitalize text-sm transition-all ${
                  active === cat
                    ? 'bg-[#14B8A6] text-white shadow-lg shadow-teal-200'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#14B8A6]'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat === 'fullstack' ? 'Full Stack' : 'Dev Tools'}
              </motion.button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {project.tags.slice(0,3).map(tag => (
                        <span 
                          key={tag}
                          className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm"
                          style={{ color: project.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-7 mb-5">{project.description}</p>
                    
                    {/* Features */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0,3).map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="text-[#14B8A6] font-bold mt-0.5">→</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* All tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg"
                          style={{ background: project.color + '15', color: project.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.live}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#14B8A6] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0D9488] transition"
                      >
                        <FaExternalLinkAlt size={13} /> Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#0F172A] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-700 transition"
                      >
                        <FaGithub size={14} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <a
              href="https://github.com/rahulthakur7655"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-700 transition shadow-xl"
            >
              <FaGithub size={20} /> View More on GitHub
            </a>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
