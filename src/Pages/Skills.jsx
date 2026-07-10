import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    color: '#6366F1',
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    icon: '{ }',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#14B8A6',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    icon: '⚛',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux Toolkit', level: 80 },
      { name: 'Vite', level: 85 },
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#F59E0B',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    icon: '⚙',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Auth', level: 80 },
      { name: 'Socket.IO', level: 70 },
    ]
  },
  {
    id: 'database',
    label: 'Tools & Database',
    color: '#EC4899',
    bg: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    icon: '🗄',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 82 },
      { name: 'Vercel', level: 80 },
      { name: 'Netlify', level: 78 },
    ]
  }
];

const techBadges = [
  { name: 'React', color: '#61DAFB', bg: '#E0F7FA' },
  { name: 'Node.js', color: '#339933', bg: '#E8F5E9' },
  { name: 'Express', color: '#000000', bg: '#F5F5F5' },
  { name: 'MongoDB', color: '#47A248', bg: '#E8F5E9' },
  { name: 'Tailwind', color: '#06B6D4', bg: '#E0F7FF' },
  { name: 'Redux', color: '#764ABC', bg: '#F3E8FF' },
  { name: 'Socket.IO', color: '#010101', bg: '#F5F5F5' },
  { name: 'JWT', color: '#D63AFF', bg: '#FAF0FF' },
  { name: 'Git', color: '#F05032', bg: '#FFF0EE' },
  { name: 'GitHub', color: '#181717', bg: '#F5F5F5' },
  { name: 'Python', color: '#3776AB', bg: '#E8F4FF' },
  { name: 'JavaScript', color: '#F7DF1E', bg: '#FEFCE8' },
];

const SkillBar = ({ name, level, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium text-[#0F172A]">{name}</span>
      <span className="text-sm font-semibold" style={{ color }}>{level}%</span>
    </div>
    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              My Skills
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Technologies I Work With
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
          </motion.div>

          {/* Skill Category Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.15 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${cat.iconBg} flex items-center justify-center text-2xl`}>
                    <span className={cat.iconColor}>{cat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{cat.label}</h3>
                    <p className="text-sm text-slate-500">{cat.skills.length} Skills</p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.skills.map((sk, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIdx * 0.15 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                      style={{
                        borderColor: cat.color + '40',
                        color: cat.color,
                        background: cat.color + '10'
                      }}
                    >
                      {sk.name}
                    </motion.span>
                  ))}
                </div>

                {/* Progress Bars */}
                <div>
                  {cat.skills.slice(0, 4).map((sk, i) => (
                    <SkillBar key={i} name={sk.name} level={sk.level} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 mb-16"
          >
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">
              Full Technology Stack
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {techBadges.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 font-medium text-sm cursor-default"
                  style={{ background: tech.bg, color: tech.color }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-10 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Soft Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { skill: 'Team Collaboration', icon: '🤝', level: 90 },
                { skill: 'Problem Solving', icon: '🧩', level: 88 },
                { skill: 'Communication', icon: '💬', level: 85 },
                { skill: 'Fast Learning', icon: '🚀', level: 92 },
                { skill: 'Time Management', icon: '⏱', level: 85 },
                { skill: 'Adaptability', icon: '🔄', level: 88 },
                { skill: 'Critical Thinking', icon: '🔍', level: 87 },
                { skill: 'Leadership', icon: '👑', level: 80 },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.07 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="text-sm font-medium">{s.skill}</p>
                  <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="h-full bg-[#14B8A6] rounded-full"
                    />
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

export default Skills;
