import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Download, Eye, FileText, User, Briefcase, GraduationCap, Code2, Award } from 'lucide-react';

const Resume = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              My Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Curriculum Vitae
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-6"></div>
            <div className="flex justify-center gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#14B8A6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0D9488] transition shadow-lg shadow-teal-200"
              >
                <Download size={18} /> Download PDF
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-[#0F172A] px-6 py-3 rounded-xl font-semibold border border-slate-200 hover:border-[#14B8A6] transition"
              >
                <Eye size={18} /> View Full
              </motion.a>
            </div>
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Resume Header */}
            <div className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white p-10">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 bg-white/20">
                  <img
                    src="/profile.png"
                    alt="Rahul Thakur"
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Rahul+Thakur&background=14B8A6&color=fff&size=200';
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Rahul Thakur</h2>
                  <p className="text-teal-100 text-lg">MERN Stack Developer</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-teal-100">
                    <span>📧 rahulthakur7655@gmail.com</span>
                    <span>📱 +91 8377725158</span>
                    <span>📍 Punjab, India</span>
                  </div>
                  <div className="flex gap-4 mt-2 text-sm text-teal-100">
                    <span>🔗 linkedin.com/in/rahul-thakur-91399a3b5</span>
                    <span>💻 github.com/rahulthakur7655</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 space-y-10">
              
              {/* Objective */}
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#0F172A] mb-4">
                  <User size={20} className="text-[#14B8A6]" /> Career Objective
                </h3>
                <p className="text-slate-600 leading-7 bg-slate-50 p-4 rounded-xl border-l-4 border-[#14B8A6]">
                  Motivated MERN Stack Developer and final-year CSE student seeking to leverage expertise in React.js, Node.js, and MongoDB 
                  to contribute to innovative projects, deliver scalable solutions, and grow professionally in a dynamic development team.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#0F172A] mb-4">
                  <Briefcase size={20} className="text-[#14B8A6]" /> Experience
                </h3>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <p className="font-bold text-[#0F172A]">MERN Stack Developer Intern</p>
                      <p className="text-[#14B8A6] font-medium">Excellence Technology</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full border">July - December 2025</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    <li>• Developed full-stack web applications from React.js, Node.js, Express.js and MongoDB</li>
                    <li>• Engineered responsive UIs and integrated RESTful APIs</li>
                    <li>• Managed MongoDB CRUD operations and fixed critical bugs</li>
                    <li>• Collaborated with agile team members throughout the project lifecycle</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#0F172A] mb-4">
                  <GraduationCap size={20} className="text-[#14B8A6]" /> Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-bold text-[#0F172A]">B.Tech — Computer Science Engineering</p>
                      <p className="text-slate-500 text-sm">Baba Banda Singh Bahadur Engineering College</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-500">2022 - 2026</span>
                      <p className="font-bold text-[#14B8A6]">CGPA: 7.39</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-bold text-[#0F172A]">Class XII — Non-Medical (CBSE)</p>
                      <p className="text-slate-500 text-sm">Guru Nanak Senior Secondary School</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-500">2022</span>
                      <p className="font-bold text-[#14B8A6]">87.6%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#0F172A] mb-4">
                  <Code2 size={20} className="text-[#14B8A6]" /> Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: 'Languages', skills: 'JavaScript, Python, HTML5, CSS3' },
                    { label: 'Frontend', skills: 'React.js, Tailwind CSS, Redux Toolkit' },
                    { label: 'Backend', skills: 'Node.js, Express.js, REST APIs, JWT' },
                    { label: 'Database & Tools', skills: 'MongoDB, Git, GitHub, Postman, VS Code' },
                  ].map((cat, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <p className="text-xs font-bold text-[#14B8A6] uppercase mb-1">{cat.label}</p>
                      <p className="text-sm text-slate-600">{cat.skills}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#0F172A] mb-4">
                  <Award size={20} className="text-[#14B8A6]" /> Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'MERN Stack Development — Excellence Technology',
                    'Python Programming & AI/ML — CIBA Infotech',
                    'NCC C Certificate — National Cadet Corps',
                    'AI/ML Fundamentals — Coursera'
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-[#14B8A6]">🏆</span>
                      <span className="text-sm text-slate-600">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Download Footer */}
            <div className="bg-slate-50 border-t border-slate-100 p-6 flex justify-center">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#14B8A6] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0D9488] transition shadow-lg"
              >
                <Download size={18} /> Download Full Resume (PDF)
              </motion.a>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Resume;
