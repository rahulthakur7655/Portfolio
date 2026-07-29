import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Award, ExternalLink, Download } from 'lucide-react';

const certs = [
  {
    id: 1,
    title: 'MERN Stack Development',
    issuer: 'Excellence Technology',
    date: 'December 2025',
    duration: '6 Months',
    icon: '🏆',
    badge: '#14B8A6',
    gradient: 'from-teal-500 to-cyan-500',
    description: 'Comprehensive certification covering full-stack web development with MongoDB, Express.js, React.js, and Node.js.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
    highlight: true
  },
  {
    id: 2,
    title: 'Python Programming & AI/ML',
    issuer: 'CIBA Infotech',
    date: '2024',
    duration: '3 Months',
    icon: '🐍',
    badge: '#3776AB',
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Advanced Python programming with machine learning fundamentals, data analysis, and AI model deployment.',
    skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    highlight: false
  },
  {
    id: 3,
    title: 'NCC C Certificate',
    issuer: 'National Cadet Corps, India',
    date: '2022',
    duration: '3 Years',
    icon: '🎖️',
    badge: '#F59E0B',
    gradient: 'from-amber-400 to-orange-400',
    description: 'Prestigious C Certificate demonstrating exceptional leadership, national service commitment, discipline, and teamwork in NCC.',
    skills: ['Leadership', 'Discipline', 'Teamwork', 'National Service'],
    highlight: false
  },
  {
    id: 4,
    title: 'AI/ML Fundamentals',
    issuer: 'Coursera / Google',
    date: '2024',
    duration: '2 Months',
    icon: '🤖',
    badge: '#EC4899',
    gradient: 'from-pink-500 to-purple-500',
    description: 'Machine Learning and Artificial Intelligence fundamentals including supervised learning, neural networks, and model evaluation.',
    skills: ['ML Algorithms', 'Neural Networks', 'Data Science', 'Python'],
    highlight: false
  }
];

const Certifications = () => {
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
              My Credentials
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Certifications & Achievements
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Validated skills and recognized achievements that demonstrate my commitment to continuous learning.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certs.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg border ${
                  cert.highlight ? 'border-[#14B8A6] ring-2 ring-[#14B8A6]/20' : 'border-slate-100'
                }`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${cert.gradient} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl backdrop-blur-sm">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-white/80 text-sm">{cert.issuer}</p>
                      {cert.highlight && (
                        <span className="inline-block bg-white/20 text-white text-xs font-bold px-2.5 py-0.5 rounded-full mt-1">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex justify-between text-sm text-slate-500 mb-4">
                    <span>📅 {cert.date}</span>
                    <span>⏱ {cert.duration}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-7 mb-5">{cert.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.map(s => (
                      <span
                        key={s}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                        style={{ background: cert.badge + '15', color: cert.badge }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-600 py-2.5 rounded-xl text-sm font-medium transition border border-slate-200">
                      <Award size={14} /> View Certificate
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 bg-[#14B8A6]/10 text-[#14B8A6] py-2.5 rounded-xl text-sm font-medium transition hover:bg-[#14B8A6]/20">
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-10 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-center mb-8">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '🏅', title: 'NCC C Certificate', desc: 'Achieved the highest NCC Certificate demonstrating leadership and national service' },
                { icon: '💼', title: '6-Month Internship', desc: 'Successfully completed MERN Stack internship at Excellence Technology' },
                { icon: '🚀', title: '10+ Projects', desc: 'Built and deployed 10+ full-stack web applications' },
                { icon: '🎓', title: 'Academic Excellence', desc: 'Maintaining 7.39 CGPA in B.Tech Computer Science Engineering' },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 rounded-2xl p-5 border border-white/20"
                >
                  <span className="text-3xl">{a.icon}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{a.title}</h3>
                    <p className="text-teal-100 text-sm">{a.desc}</p>
                  </div>
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

export default Certifications;
