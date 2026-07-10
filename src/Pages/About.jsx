import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Code2, Database, Globe, Palette } from 'lucide-react';

const About = () => {
  const whatIDo = [
    {
      icon: <Code2 size={32} className="text-[#14B8A6]" />,
      title: "Web Development",
      description: "Building responsive and scalable web applications using modern technologies."
    },
    {
      icon: <Database size={32} className="text-[#14B8A6]" />,
      title: "Full Stack Development",
      description: "Creating end-to-end solutions with React, Node.js, Express.js and MongoDB."
    },
    {
      icon: <Globe size={32} className="text-[#14B8A6]" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and user-friendly interfaces with modern design principles."
    },
    {
      icon: <Palette size={32} className="text-[#14B8A6]" />,
      title: "Problem Solving",
      description: "Solving complex problems with scalable solutions and clean code."
    }
  ];

  const stats = [
    { number: "6+", label: "Months Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "7.42", label: "CGPA" },
    { number: "2026", label: "Graduation Year" }
  ];

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
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Know Me More
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Left: Intro + Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="/profile.png" 
                      alt="Rahul Thakur"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=Rahul+Thakur&background=14B8A6&color=fff&size=200';
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0F172A]">Rahul Thakur</h2>
                    <p className="text-[#14B8A6] font-medium">MERN Stack Developer</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Introduction</h3>
                <p className="text-slate-600 leading-7 mb-4">
                  Hello! I'm <strong>Rahul Thakur</strong>, a passionate MERN Stack Developer and final-year Computer Science Engineering student. 
                  I specialize in building modern, scalable web applications using React, Node.js, Express.js, and MongoDB.
                </p>
                <p className="text-slate-600 leading-7 mb-4">
                  With a strong foundation in full-stack development and hands-on experience from my internship at Excellence Technology, 
                  I've successfully delivered 10+ projects ranging from finance platforms to chess games and document converters.
                </p>
                <p className="text-slate-600 leading-7">
                  I'm driven by curiosity, clean code, and creating user-friendly solutions that solve real-world problems.
                </p>

                <h3 className="text-xl font-semibold text-[#0F172A] mt-6 mb-4">Career Objective</h3>
                <p className="text-slate-600 leading-7">
                  To leverage my skills in MERN Stack development and contribute to innovative projects in a dynamic environment, 
                  while continuously learning and growing as a developer.
                </p>
              </div>
            </motion.div>

            {/* Right: Stats + What I Do */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100"
                  >
                    <h3 className="text-3xl font-bold text-[#14B8A6]">{stat.number}</h3>
                    <p className="text-slate-600 mt-2 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* What I Do */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6">What I Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whatIDo.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#F0FDFA] flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0F172A] mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-10 shadow-xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Experience & Internship</h3>
              <p className="text-teal-100">Hands-on industry experience</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-bold">MERN Stack Intern</h4>
                    <p className="text-teal-100">Excellence Technology</p>
                  </div>
                  <span className="bg-[#14B8A6] px-4 py-1 rounded-full text-sm font-medium">
                    July 2025 - December 2025
                  </span>
                </div>
                <ul className="space-y-2 text-teal-50">
                  <li>• Developed full-stack web applications using React, Node.js, and MongoDB</li>
                  <li>• Implemented RESTful APIs and integrated third-party services</li>
                  <li>• Collaborated with team members using Git and Agile methodologies</li>
                  <li>• Optimized application performance and ensured responsiveness across devices</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
