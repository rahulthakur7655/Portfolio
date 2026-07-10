import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Database, Globe, Layout, BrainCircuit,
  ExternalLink, ChevronRight, Briefcase, GraduationCap, Award
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// ─── Animated Counter (replaces react-countup) ─────────────────────
function AnimatedNumber({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────
const statsData = [
  { n: 10, suffix: '+', label: 'Projects Completed', icon: '🚀' },
  { n: 6,  suffix: '+', label: 'Months Experience', icon: '💼' },
  { n: 7,  suffix: '.42', label: 'CGPA', icon: '🎓', decimal: true },
  { n: 15, suffix: '+', label: 'Technologies', icon: '🛠️' },
];

// ─── Services ─────────────────────────────────────────────────────
// Icons are stored as component references + props, not pre-rendered JSX,
// to avoid "invalid element type" errors at module evaluation time.
const services = [
  {
    Icon: Layout,
    title: 'Web Development',
    description: 'Building responsive and interactive web applications using modern technologies.',
    color: '#14B8A6'
  },
  {
    Icon: Database,
    title: 'Full Stack Development',
    description: 'Creating end-to-end solutions with React, Node.js, Express and MongoDB.',
    color: '#6366F1'
  },
  {
    Icon: Globe,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and user-friendly interfaces with modern design principles.',
    color: '#F59E0B'
  },
  {
    Icon: BrainCircuit,
    title: 'Problem Solving',
    description: 'Taking real-world problems and building scalable and efficient solutions.',
    color: '#EC4899'
  },
];

// ─── Featured Projects ────────────────────────────────────────────
const featuredProjects = [
  {
    title: 'OPINIFI',
    subtitle: 'Finance Platform',
    desc: 'A finance platform where users share opinions, earn rewards and brands gain insights.',
    tags: ['React', 'Node', 'Express', 'MongoDB', 'Stripe'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60',
    github: 'https://github.com/rahulthakur7655',
    live: '#',
    color: '#14B8A6'
  },
  {
    title: 'Chess Master',
    subtitle: 'Multiplayer Game',
    desc: 'Real-step chess game with online multiplayer, AI opponents, live leaderboard and more.',
    tags: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
    img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=60',
    github: 'https://github.com/rahulthakur7655',
    live: '#',
    color: '#6366F1'
  },
  {
    title: 'DocFormat',
    subtitle: 'Document Converter',
    desc: 'Tool to convert unstructured text into SBSDS-compliant academic reports.',
    tags: ['React', 'Node.js', 'HTML5', 'CSS3'],
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60',
    github: 'https://github.com/rahulthakur7655',
    live: '#',
    color: '#F59E0B'
  }
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <Hero />

      {/* ── STATS ── */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-[#F0FDFA] to-white rounded-2xl p-6 text-center shadow-sm border border-slate-100"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#14B8A6]">
                  <AnimatedNumber target={s.n} suffix={s.suffix} decimals={s.decimal ? 2 : 0} />
                </h3>
                <p className="text-sm text-slate-600 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 bg-gradient-to-br from-[#F0FDFA] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* About me text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-[#14B8A6] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
                ABOUT ME
              </span>
              <h2 className="text-4xl font-bold text-[#0F172A] leading-tight mb-6">
                I'm Rahul Thakur,<br />
                <span className="text-[#14B8A6]">MERN Stack Developer</span>
              </h2>
              <p className="text-slate-600 leading-8 mb-6">
                I'm a final year Computer Science Engineering student passionate about full stack development. 
                I love turning ideas into real-world applications using the MERN stack and other modern technologies.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { Icon: Briefcase, iconClass: 'text-[#14B8A6]', text: 'MERN Stack Intern @ Excellence Technology (Jul-Dec 2025)' },
                  { Icon: GraduationCap, iconClass: 'text-[#14B8A6]', text: 'B.Tech CSE @ BBSB Engineering College — CGPA: 7.42' },
                  { Icon: Award, iconClass: 'text-[#14B8A6]', text: 'NCC C Certificate | MERN Certified Developer' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100"
                  >
                    <item.Icon size={18} className={item.iconClass} />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#14B8A6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0D9488] transition shadow-lg shadow-teal-200"
              >
                Read More About Me <ChevronRight size={18} />
              </Link>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-[#14B8A6] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
                WHAT I DO
              </span>
              <div className="grid grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: s.color + '20', color: s.color }}
                    >
                      <s.Icon size={30} />
                    </div>
                    <h3 className="font-bold text-[#0F172A] mb-2 text-sm">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12 flex-wrap gap-4"
          >
            <div>
              <span className="inline-block bg-[#14B8A6] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                FEATURED PROJECTS
              </span>
              <h2 className="text-4xl font-bold text-[#0F172A]">My Best Work 💼</h2>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-[#14B8A6] font-semibold hover:text-[#0D9488] transition"
            >
              View All Projects <ChevronRight size={18} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
                    {proj.tags.slice(0, 3).map(t => (
                      <span
                        key={t}
                        className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm"
                        style={{ color: proj.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white font-bold">{proj.title}</h3>
                    <p className="text-white/80 text-xs">{proj.subtitle}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{proj.desc}</p>
                  <div className="flex gap-2">
                    <a
                      href={proj.live}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#14B8A6] text-white py-2 rounded-xl text-xs font-semibold hover:bg-[#0D9488] transition"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#0F172A] text-white py-2 rounded-xl text-xs font-semibold hover:bg-slate-700 transition"
                    >
                      <FaGithub size={12} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="https://github.com/rahulthakur7655"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition shadow-lg"
            >
              <FaGithub size={18} /> View More on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS SNAPSHOT ── */}
      <section className="py-16 bg-gradient-to-br from-[#F0FDFA] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
              SKILLS
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A]">Tech I Work With 🛠️</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React.js','Node.js','Express.js','MongoDB','Tailwind CSS','Redux',
              'Socket.IO','JWT','Git','GitHub','JavaScript','Python','REST APIs','Vercel'
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100 text-sm font-semibold text-[#0F172A] cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-[#14B8A6] font-semibold hover:text-[#0D9488] transition"
            >
              View All Skills <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE SNIPPET ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-10 flex-wrap gap-4"
          >
            <div>
              <span className="inline-block bg-[#14B8A6] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                EXPERIENCE
              </span>
              <h2 className="text-4xl font-bold text-[#0F172A]">Work Experience 💼</h2>
            </div>
            <Link to="/experience" className="flex items-center gap-2 text-[#14B8A6] font-semibold hover:text-[#0D9488]">
              See Details <ChevronRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold">MERN Stack Intern</h3>
                <p className="text-teal-100 text-lg font-medium">Excellence Technology</p>
              </div>
              <span className="bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-sm font-medium">
                Jul 2025 - Dec 2025
              </span>
            </div>
            <div className="mt-5 grid md:grid-cols-2 gap-3">
              {[
                'Developed full-stack web apps from scratch using React.js, Node.js & MongoDB',
                'Engineered responsive UI and integrated RESTful APIs',
                'Managed dynamic MongoDB operations and fixed critical bugs',
                'Collaborated tightly with agile team members throughout the project'
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-teal-50">
                  <span className="text-[#14B8A6] bg-white/20 rounded-full w-4 h-4 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  {r}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION SNIPPET ── */}
      <section className="py-16 bg-gradient-to-br from-[#F0FDFA] to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-10 flex-wrap gap-4"
          >
            <div>
              <span className="inline-block bg-[#14B8A6] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                EDUCATION
              </span>
              <h2 className="text-4xl font-bold text-[#0F172A]">Academic Background 🎓</h2>
            </div>
            <Link to="/education" className="flex items-center gap-2 text-[#14B8A6] font-semibold hover:text-[#0D9488]">
              Full Details <ChevronRight size={18} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                degree: 'B.Tech — Computer Science Engineering',
                institution: 'Baba Banda Singh Bahadur Engineering College (BBSBE)',
                duration: '2022 - 2026',
                score: 'CGPA: 7.42',
                icon: '🎓',
                location: 'Gurdaspur, Punjab',
                color: '#14B8A6'
              },
              {
                degree: 'Class XII — Non Medical (CBSE)',
                institution: 'Sr. Kabir Public School',
                duration: '2022',
                score: 'Percentage: 67.4%',
                icon: '📚',
                location: 'Gurdaspur, Punjab',
                color: '#6366F1'
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex gap-4"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: edu.color + '15' }}
                >
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A]">{edu.degree}</h3>
                  <p className="text-sm font-medium" style={{ color: edu.color }}>{edu.institution}</p>
                  <p className="text-xs text-slate-500 mt-1">{edu.duration} · {edu.location}</p>
                  <span 
                    className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mt-2"
                    style={{ background: edu.color + '15', color: edu.color }}
                  >
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS SNAPSHOT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-10 flex-wrap gap-4"
          >
            <div>
              <span className="inline-block bg-[#14B8A6] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                CERTIFICATIONS & ACHIEVEMENTS
              </span>
              <h2 className="text-3xl font-bold text-[#0F172A]">Credentials 🏆</h2>
            </div>
            <Link to="/certifications" className="flex items-center gap-2 text-[#14B8A6] font-semibold">
              View All <ChevronRight size={18} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">📜 Certifications</h3>
              <div className="space-y-3">
                {[
                  { name: 'MERN Stack Development — Excellence Technology', icon: '🏆' },
                  { name: 'Python Programming & AI/ML — CIBA Infotech', icon: '🐍' },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-[#F0FDFA] rounded-xl p-4 border border-teal-100"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <span className="text-sm font-medium text-[#0F172A]">{c.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">🏅 Achievements</h3>
              <div className="space-y-3">
                {[
                  { name: 'NCC C Certificate', icon: '🎖️' },
                  { name: 'Successfully completed a 6-month MERN Stack Internship', icon: '💼' },
                ].map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-amber-50 rounded-xl p-4 border border-amber-100"
                  >
                    <span className="text-2xl">{a.icon}</span>
                    <span className="text-sm font-medium text-[#0F172A]">{a.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERESTS ── */}
      <section className="py-16 bg-gradient-to-r from-[#0F766E] to-[#115E59]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Interests & Hobbies 🌟</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: '💻', label: 'Full Stack Development' },
                { icon: '📚', label: 'Tech Learning' },
                { icon: '🏃', label: 'Running' },
                { icon: '🏋️', label: 'Gym Workout' },
                { icon: '🎮', label: 'Frontend Dev' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 w-32"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-white text-xs font-medium text-center">{item.label}</span>
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

export default Home;
