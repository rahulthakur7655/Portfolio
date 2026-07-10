import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Clock, Tag, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Building a Full-Stack App with MERN Stack — A Complete Guide',
    excerpt: 'Learn how to build a production-ready full-stack web application using MongoDB, Express.js, React.js, and Node.js from scratch.',
    category: 'MERN Stack',
    readTime: '8 min read',
    date: 'December 2025',
    color: '#14B8A6',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    featured: true
  },
  {
    id: 2,
    title: 'React Hooks Deep Dive: useState, useEffect, useContext and Custom Hooks',
    excerpt: 'A comprehensive guide to React hooks that changed the way we build React applications. Understand when and how to use each hook effectively.',
    category: 'React',
    readTime: '10 min read',
    date: 'November 2025',
    color: '#61DAFB',
    img: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60',
    tags: ['React', 'Hooks', 'JavaScript'],
    featured: false
  },
  {
    id: 3,
    title: 'JWT Authentication with Node.js and Express — Best Practices',
    excerpt: 'Implement secure JWT authentication in your Node.js API. Learn about access tokens, refresh tokens, and security best practices.',
    category: 'Backend',
    readTime: '7 min read',
    date: 'October 2025',
    color: '#F59E0B',
    img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop&q=60',
    tags: ['Node.js', 'JWT', 'Security', 'Express'],
    featured: false
  },
  {
    id: 4,
    title: 'My Journey: From CSE Student to MERN Stack Developer',
    excerpt: 'How I went from learning basics in college to building production apps during my internship. The roadmap, resources, and lessons learned.',
    category: 'Career',
    readTime: '5 min read',
    date: 'September 2025',
    color: '#EC4899',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60',
    tags: ['Career', 'Journey', 'Tips'],
    featured: false
  },
  {
    id: 5,
    title: 'MongoDB Schema Design Patterns for Scalable Applications',
    excerpt: 'Learn the right way to design MongoDB schemas. Understand embedding vs referencing, indexing strategies, and aggregation pipelines.',
    category: 'Database',
    readTime: '9 min read',
    date: 'August 2025',
    color: '#47A248',
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=60',
    tags: ['MongoDB', 'Database', 'Performance'],
    featured: false
  },
  {
    id: 6,
    title: 'Real-time Features with Socket.IO in a MERN App',
    excerpt: 'Implement real-time chat, notifications, and live updates in your MERN application using Socket.IO. Build a chess game as a practical example.',
    category: 'MERN Stack',
    readTime: '12 min read',
    date: 'July 2025',
    color: '#6366F1',
    img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=60',
    tags: ['Socket.IO', 'React', 'Node.js', 'Real-time'],
    featured: false
  }
];

const categories = ['All', 'MERN Stack', 'React', 'Backend', 'Database', 'Career'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Thoughts & Tutorials
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MERN tutorials, React articles, and my personal developer journey.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center flex-wrap gap-3 mb-10">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.03 }}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#14B8A6] text-white shadow-lg shadow-teal-200'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#14B8A6]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Featured Post */}
          {activeCategory === 'All' && featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-10 group"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#14B8A6] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span 
                    className="text-xs font-bold uppercase tracking-wide mb-3"
                    style={{ color: featured.color }}
                  >
                    {featured.category}
                  </span>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-3 leading-snug">{featured.title}</h2>
                  <p className="text-slate-600 text-sm leading-7 mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map(t => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg"
                        style={{ background: featured.color + '15', color: featured.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-semibold text-[#14B8A6] hover:text-[#0D9488] transition"
                  >
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'All' ? rest : filtered).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full bg-white shadow-sm"
                      style={{ color: post.color }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#0F172A] font-bold mb-2 leading-snug line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <a
                    href="#"
                    className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#14B8A6] hover:text-[#0D9488] transition"
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
