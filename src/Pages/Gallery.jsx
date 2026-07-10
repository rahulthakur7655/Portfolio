import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: 'projects',
    title: 'OPINIFI Dashboard',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60',
    caption: 'Finance platform analytics dashboard'
  },
  {
    id: 2,
    category: 'projects',
    title: 'Chess Master',
    img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=60',
    caption: 'Real-time multiplayer chess game'
  },
  {
    id: 3,
    category: 'projects',
    title: 'DocFormat Tool',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60',
    caption: 'Document conversion & formatting tool'
  },
  {
    id: 4,
    category: 'projects',
    title: 'StreamTube Platform',
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=60',
    caption: 'Video streaming platform'
  },
  {
    id: 5,
    category: 'certificates',
    title: 'MERN Certificate',
    img: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=600&auto=format&fit=crop&q=60',
    caption: 'Excellence Technology MERN Stack Certification'
  },
  {
    id: 6,
    category: 'certificates',
    title: 'NCC C Certificate',
    img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&auto=format&fit=crop&q=60',
    caption: 'National Cadet Corps C Certificate'
  },
  {
    id: 7,
    category: 'internship',
    title: 'Excellence Technology',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60',
    caption: 'MERN Stack Internship workspace'
  },
  {
    id: 8,
    category: 'internship',
    title: 'Team Collaboration',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60',
    caption: 'Collaborating with the development team'
  },
  {
    id: 9,
    category: 'projects',
    title: 'API Development',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60',
    caption: 'Backend API development workflow'
  }
];

const categories = ['all', 'projects', 'certificates', 'internship'];

const Gallery = () => {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'all' ? galleryItems : galleryItems.filter(g => g.category === active);

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
              Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Gallery
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A visual showcase of my projects, certificates, and internship experiences.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.03 }}
                className={`px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                  active === cat
                    ? 'bg-[#14B8A6] text-white shadow-lg shadow-teal-200'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#14B8A6]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setLightbox(item)}
                  className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-white/70 text-xs">{item.caption}</p>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/90 text-[#14B8A6] capitalize">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition"
              >
                <X size={28} />
              </button>
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="w-full rounded-2xl"
              />
              <div className="mt-3 text-center text-white">
                <h3 className="text-xl font-bold">{lightbox.title}</h3>
                <p className="text-white/70 text-sm">{lightbox.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Gallery;
