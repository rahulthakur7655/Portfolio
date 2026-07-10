import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Excellence Technology',
    location: 'Virtual, Punjab',
    duration: 'July 2025 – December 2025',
    type: 'Internship',
    color: '#14B8A6',
    responsibilities: [
      'Developed full-stack web applications from scratch using React.js, Node.js, Express.js, and MongoDB',
      'Engineered responsive UI components and integrated RESTful APIs with proper error handling',
      'Managed dynamic MongoDB CRUD operations and fixed critical bugs in production',
      'Collaborated tightly with agile team members throughout the development lifecycle',
      'Implemented JWT-based authentication and role-based access control systems',
      'Optimized application performance by code splitting and lazy loading techniques',
    ],
    achievements: [
      'Successfully completed 6-month MERN Stack Internship',
      'Built and deployed OPINIFI finance platform used by 100+ users',
      'Reduced API response time by 30% through query optimization',
      'Received Certificate of Excellence for outstanding performance',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Git']
  }
];

const Experience = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Work Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              My Experience
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14B8A6] to-transparent hidden md:block" />

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative md:pl-20 mb-12"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-8 w-16 h-16 rounded-full bg-[#14B8A6] text-white items-center justify-center shadow-lg shadow-teal-200 z-10">
                  <Briefcase size={24} />
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <span className="inline-block bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {exp.type}
                      </span>
                      <h2 className="text-2xl font-bold text-[#0F172A]">{exp.role}</h2>
                      <p className="text-lg font-semibold text-[#14B8A6]">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#14B8A6] text-white text-xs flex items-center justify-center font-bold">R</span>
                        Responsibilities
                      </h3>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((r, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                            className="flex items-start gap-3 text-sm text-slate-600"
                          >
                            <span className="text-[#14B8A6] mt-1 flex-shrink-0">•</span>
                            {r}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-400 text-white text-xs flex items-center justify-center font-bold">A</span>
                        Achievements
                      </h3>
                      <ul className="space-y-3">
                        {exp.achievements.map((a, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                            className="flex items-start gap-3 text-sm text-slate-600"
                          >
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            {a}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech used */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-500 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-10 text-center shadow-xl"
          >
            <p className="text-2xl font-light italic mb-4">
              "Continuous learning and consistency are the keys to growth."
            </p>
            <p className="text-teal-200">— Rahul Thakur</p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Experience;
