import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';

const achievements = [
  {
    icon: '💼',
    title: 'MERN Stack Internship',
    description: 'Successfully completed a 6-month intensive MERN Stack Development Internship at Excellence Technology, building production-ready web applications.',
    date: 'July - December 2025',
    category: 'Professional',
    color: '#14B8A6',
    details: ['Worked on 3+ real client projects', 'Gained hands-on industry experience', 'Received certificate of excellence']
  },
  {
    icon: '🎖️',
    title: 'NCC C Certificate',
    description: 'Achieved the prestigious NCC C Certificate — the highest level NCC certification, demonstrating exceptional leadership, discipline, and patriotism.',
    date: '2022',
    category: 'Extracurricular',
    color: '#F59E0B',
    details: ['Highest NCC certification', 'Leadership & teamwork skills', 'National service commitment']
  },
  {
    icon: '🚀',
    title: '10+ Projects Completed',
    description: 'Successfully built, tested, and deployed 10+ full-stack web applications ranging from finance platforms to gaming applications and developer tools.',
    date: '2023 - 2025',
    category: 'Technical',
    color: '#6366F1',
    details: ['OPINIFI Finance Platform', 'Chess Master Multiplayer', 'DocFormat Tool', 'StreamTube Platform']
  },
  {
    icon: '📊',
    title: 'GitHub Contributions',
    description: 'Consistent open-source contributor with 500+ GitHub contributions, maintaining multiple repositories and contributing to community projects.',
    date: 'Ongoing',
    category: 'Technical',
    color: '#0F172A',
    details: ['500+ total contributions', '10+ repositories', 'Active open-source contributor']
  },
  {
    icon: '🎓',
    title: 'Academic Achievement',
    description: 'Maintaining a strong 7.39 CGPA in B.Tech Computer Science Engineering while simultaneously working on real-world projects.',
    date: '2022 - 2026',
    category: 'Academic',
    color: '#EC4899',
    details: ['7.39 CGPA', 'Computer Science Engineering', 'Final Year Student']
  },
  {
    icon: '🏆',
    title: 'MERN Stack Certification',
    description: 'Earned the official MERN Stack Developer certification from Excellence Technology validating expertise in full-stack web development.',
    date: 'December 2025',
    category: 'Certification',
    color: '#10B981',
    details: ['Full Stack Development', 'Industry-recognized cert', 'Excellence Technology']
  }
];

const categoryColors = {
  'Professional': 'bg-teal-100 text-teal-700',
  'Technical': 'bg-indigo-100 text-indigo-700',
  'Extracurricular': 'bg-amber-100 text-amber-700',
  'Academic': 'bg-pink-100 text-pink-700',
  'Certification': 'bg-green-100 text-green-700'
};

const Achievements = () => {
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
              My Wins
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Achievements & Milestones
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Milestones and achievements that define my journey as a developer and individual.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100"
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-inner"
                  style={{ background: ach.color + '15' }}
                >
                  {ach.icon}
                </div>

                {/* Category Badge */}
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${categoryColors[ach.category]}`}>
                  {ach.category}
                </span>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{ach.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{ach.description}</p>

                {/* Details */}
                <ul className="space-y-1.5 mb-4">
                  {ach.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <span style={{ color: ach.color }}>▸</span> {d}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-medium">{ach.date}</span>
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ background: ach.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-10 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-center mb-8">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: '10+', label: 'Projects Built', icon: '🚀' },
                { n: '6', label: 'Months Internship', icon: '💼' },
                { n: '500+', label: 'GitHub Commits', icon: '📊' },
                { n: '4', label: 'Certifications', icon: '🏆' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="text-center bg-white/10 rounded-2xl p-5 border border-white/20"
                >
                  <div className="text-4xl mb-2">{s.icon}</div>
                  <div className="text-3xl font-bold">{s.n}</div>
                  <div className="text-teal-100 text-sm mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Achievements;
