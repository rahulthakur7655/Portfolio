import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Baba Banda Singh Bahadur Engineering College',
    location: 'Fatehgarh Sahib, Punjab',
    duration: '2022 - 2026',
    cgpa: '7.39',
    status: 'Current (Final Year)',
    color: '#14B8A6',
    highlights: [
      'CGPA: 7.39/10',
      'Relevant Coursework: DSA, DBMS, OS, Computer Networks, Web Development',
      'Completed MERN Stack Internship at Excellence Technology',
      'Active participation in coding competitions and hackathons',
    ]
  },
  {
    degree: 'Class XII (CBSE)',
    field: 'Non-Medical',
    institution: 'Guru Nanak Senior Secondary School',
    location: 'Budhlada, Punjab',
    duration: '2020 - 2022',
    cgpa: '87.6%',
    status: 'Completed',
    color: '#6366F1',
    highlights: [
      'Percentage: 87.6%',
      'Subjects: Physics, Chemistry, Mathematics, Computer Science',
      'School Topper in Computer Science',
      'Active member of coding club',
    ]
  }
];

const certifications = [
  {
    name: 'MERN Stack Development',
    issuer: 'Excellence Technology',
    date: 'December 2025',
    icon: '🏆',
    color: '#14B8A6',
    description: 'Comprehensive full-stack web development certification covering React, Node.js, Express, and MongoDB.'
  },
  {
    name: 'Python Programming',
    issuer: 'Coursera',
    date: '2024',
    icon: '🐍',
    color: '#3776AB',
    description: 'Advanced Python programming including OOP, data structures, and algorithms.'
  },
  {
    name: 'NCC C Certificate',
    issuer: 'National Cadet Corps',
    date: '2022',
    icon: '🎖️',
    color: '#F59E0B',
    description: 'C Certificate for demonstrating leadership, discipline, and teamwork in NCC activities.'
  },
  {
    name: 'AI & Machine Learning',
    issuer: 'Udemy',
    date: '2024',
    icon: '🤖',
    color: '#EC4899',
    description: 'Introduction to Machine Learning, Deep Learning, and AI model deployment.'
  }
];

const Education = () => {
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
              Academic Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Education & Certifications
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
              <GraduationCap className="text-[#14B8A6]" size={28} />
              Education
            </h2>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <span 
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                        style={{ background: edu.color + '20', color: edu.color }}
                      >
                        {edu.status}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0F172A]">{edu.degree}</h3>
                      <p className="text-lg font-semibold" style={{ color: edu.color }}>{edu.field}</p>
                      <p className="text-slate-600 font-medium mt-1">{edu.institution}</p>
                      <p className="text-sm text-slate-500">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 mb-2">{edu.duration}</p>
                      <p className="text-3xl font-bold" style={{ color: edu.color }}>{edu.cgpa}</p>
                      <p className="text-xs text-slate-500">{edu.degree.includes('Bachelor') ? 'CGPA' : 'Percentage'}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    {edu.highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span style={{ color: edu.color }}>✓</span>
                        {h}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
              <Award className="text-[#14B8A6]" size={28} />
              Certifications & Achievements
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: cert.color + '20' }}
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0F172A] mb-1">{cert.name}</h3>
                      <p className="text-sm font-semibold mb-2" style={{ color: cert.color }}>{cert.issuer}</p>
                      <p className="text-xs text-slate-500 mb-3">{cert.date}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-10 text-center shadow-xl"
          >
            <BookOpen size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Always Learning, Always Growing</h3>
            <p className="text-teal-100 max-w-2xl mx-auto">
              Committed to continuous learning and staying updated with the latest technologies in web development.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Education;
