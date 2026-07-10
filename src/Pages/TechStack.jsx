import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';

const techStack = [
  {
    category: '⚛️ Frontend',
    color: '#61DAFB',
    bg: '#E0F7FA',
    items: [
      { name: 'React.js', level: 92, desc: 'UI development with hooks, context, and modern patterns' },
      { name: 'Tailwind CSS', level: 90, desc: 'Utility-first CSS framework for rapid UI development' },
      { name: 'Redux Toolkit', level: 80, desc: 'State management for large-scale applications' },
      { name: 'HTML5 / CSS3', level: 95, desc: 'Semantic markup and modern CSS features' },
    ]
  },
  {
    category: '🖥️ Backend',
    color: '#68A063',
    bg: '#E8F5E9',
    items: [
      { name: 'Node.js', level: 85, desc: 'Server-side JavaScript runtime environment' },
      { name: 'Express.js', level: 85, desc: 'Minimal and flexible Node.js web framework' },
      { name: 'REST APIs', level: 88, desc: 'RESTful API design and development' },
      { name: 'Socket.IO', level: 70, desc: 'Real-time bidirectional event-based communication' },
    ]
  },
  {
    category: '🗄️ Database',
    color: '#47A248',
    bg: '#F0FFF0',
    items: [
      { name: 'MongoDB', level: 85, desc: 'NoSQL database for flexible document storage' },
      { name: 'Mongoose', level: 82, desc: 'MongoDB object modeling for Node.js' },
    ]
  },
  {
    category: '🔐 Auth & Security',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    items: [
      { name: 'JWT', level: 80, desc: 'JSON Web Tokens for secure authentication' },
      { name: 'bcrypt', level: 78, desc: 'Password hashing for secure user data' },
    ]
  },
  {
    category: '🛠️ Tools & DevOps',
    color: '#F05032',
    bg: '#FFF3EE',
    items: [
      { name: 'Git', level: 88, desc: 'Version control and collaborative development' },
      { name: 'GitHub', level: 88, desc: 'Code hosting and open-source collaboration' },
      { name: 'Postman', level: 82, desc: 'API testing and documentation tool' },
      { name: 'Vercel', level: 80, desc: 'Frontend deployment and hosting platform' },
      { name: 'VS Code', level: 95, desc: 'Primary code editor with custom configuration' },
    ]
  },
  {
    category: '💬 Languages',
    color: '#F7DF1E',
    bg: '#FEFCE8',
    items: [
      { name: 'JavaScript (ES6+)', level: 90, desc: 'Primary programming language' },
      { name: 'Python', level: 75, desc: 'Scripting, ML, and automation' },
    ]
  }
];

const TechStack = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              My Toolkit
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Full Tech Stack
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A complete overview of the technologies, frameworks, and tools I work with daily.
            </p>
          </motion.div>

          {/* MERN Stack Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-8 mb-12 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-center mb-6">🔥 MERN Stack — Core Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { letter: 'M', name: 'MongoDB', color: '#47A248', desc: 'Database' },
                { letter: 'E', name: 'Express.js', color: '#ffffff', desc: 'Backend Framework' },
                { letter: 'R', name: 'React.js', color: '#61DAFB', desc: 'Frontend Library' },
                { letter: 'N', name: 'Node.js', color: '#68A063', desc: 'Runtime Environment' },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center backdrop-blur-sm"
                >
                  <div 
                    className="text-4xl font-black mb-2" 
                    style={{ color: m.letter === 'E' ? '#94a3b8' : m.color }}
                  >
                    {m.letter}
                  </div>
                  <p className="font-bold text-sm">{m.name}</p>
                  <p className="text-xs text-teal-200">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((cat, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + catIdx * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100"
              >
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">{cat.category}</h3>
                <div className="space-y-5">
                  {cat.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <div>
                          <span className="text-sm font-bold text-[#0F172A]">{item.name}</span>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <span className="text-sm font-bold" style={{ color: cat.color }}>{item.level}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: catIdx * 0.1 + i * 0.05 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})` }}
                        />
                      </div>
                    </div>
                  ))}
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

export default TechStack;
