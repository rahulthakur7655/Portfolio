import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Database, Globe, Layout, BrainCircuit,
  ExternalLink, ChevronRight, Briefcase, GraduationCap, Award, ArrowRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

/* ── Animated Number counter ─────────────────────────── */
function AnimatedNumber({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const inc = target / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>;
}

/* ── Section Header ──────────────────────────────────── */
function SectionHeader({ tag, title, highlight, center = true }) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}>
      <span className="inline-block bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-200/50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
        {tag}
      </span>
      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
        {title}{' '}
        {highlight && <span className="bg-gradient-to-r from-[#14B8A6] to-cyan-500 bg-clip-text text-transparent">{highlight}</span>}
      </h2>
    </div>
  );
}

/* ── Data ────────────────────────────────────────────── */
const statsData = [
  { n: 10,  suffix: '+',   decimals: 0, label: 'Projects Built',    icon: '🚀', color: '#14B8A6' },
  { n: 6,   suffix: '+',   decimals: 0, label: 'Months Internship', icon: '💼', color: '#6366F1' },
  { n: 7.39, suffix: '',    decimals: 2, label: 'CGPA',              icon: '🎓', color: '#F59E0B' },
  { n: 15,  suffix: '+',   decimals: 0, label: 'Technologies',      icon: '🛠️', color: '#EC4899' },
];

const services = [
  { Icon: Layout,      title: 'Web Development',      desc: 'Responsive & interactive web apps with modern tech.',       color: '#14B8A6', bg: '#F0FDFA' },
  { Icon: Database,    title: 'Full Stack Dev',        desc: 'End-to-end MERN stack solutions from DB to UI.',           color: '#6366F1', bg: '#EEF2FF' },
  { Icon: Globe,       title: 'UI/UX Design',          desc: 'Clean, intuitive interfaces users love to interact with.', color: '#F59E0B', bg: '#FFFBEB' },
  { Icon: BrainCircuit, title: 'Problem Solving',     desc: 'Scalable, efficient solutions for complex challenges.',     color: '#EC4899', bg: '#FDF2F8' },
];

const featuredProjects = [
  {
    title: 'OPINIFI', subtitle: 'Finance Platform',
    desc: 'Finance platform where users share opinions, earn rewards and brands gain insights.',
    tags: ['React', 'Node', 'MongoDB'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=70&fit=crop',
    github: 'https://github.com/rahulthakur7655', live: '#', color: '#14B8A6',
  },
  {
    title: 'Chess Master', subtitle: 'Multiplayer Game',
    desc: 'Real-time chess with online multiplayer, AI opponents and live leaderboard.',
    tags: ['React', 'Socket.IO', 'Node.js'], img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=70&fit=crop',
    github: 'https://github.com/rahulthakur7655', live: '#', color: '#6366F1',
  },
  {
    title: 'DocFormat', subtitle: 'Document Converter',
    desc: 'Converts unstructured text into SBSDS-compliant academic reports instantly.',
    tags: ['React', 'Node.js', 'CSS3'], img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=70&fit=crop',
    github: 'https://github.com/rahulthakur7655', live: '#', color: '#F59E0B',
  },
];

const techBadges = ['React.js','Node.js','Express.js','MongoDB','Tailwind','Redux','Socket.IO','JWT','Git','Python','REST APIs','Vercel'];

/* ── Main Component ──────────────────────────────────── */
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ══ STATS STRIP ══ */}
      <section className="relative bg-white py-12 sm:py-16 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statsData.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: s.color }} />
                <div className="text-3xl sm:text-4xl mb-3">{s.icon}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1" style={{ color: s.color }}>
                  <AnimatedNumber target={s.n} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT SECTION ══ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Left: About text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeader tag="About Me" title="Passionate about" highlight="Full Stack Dev" center={false} />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:leading-loose mb-6 sm:mb-8">
                I'm a final year CSE student who transforms ideas into scalable web applications.
                I love every part of the stack — from designing clean UIs to architecting efficient APIs
                and optimizing database queries.
              </p>

              {/* Highlight cards */}
              <div className="flex flex-col gap-3 mb-6 sm:mb-8">
                {[
                  { Icon: Briefcase, text: 'MERN Intern @ Excellence Technology · Jul–Dec 2025', color: '#14B8A6', bg: '#F0FDFA' },
                  { Icon: GraduationCap, text: 'B.Tech CSE · BBSB Engineering College · CGPA 7.39', color: '#6366F1', bg: '#EEF2FF' },
                  { Icon: Award, text: 'NCC C Certificate · MERN Stack Certified', color: '#F59E0B', bg: '#FFFBEB' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 sm:py-3.5 shadow-sm border border-slate-100/80 bg-white hover:shadow-md transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: item.bg }}>
                      <item.Icon size={18} style={{ color: item.color }} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-teal-200/50 hover:shadow-teal-300/70 transition-all hover:scale-105">
                More About Me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right: Services grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeader tag="What I Do" title="My" highlight="Services" center={false} />
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: s.bg }}>
                      <s.Icon size={22} style={{ color: s.color }} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS SECTION ══ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-10 sm:mb-14">
            <SectionHeader tag="Featured Work" title="My Best" highlight="Projects" center={false} />
            <Link
              to="/projects"
              className="group flex items-center gap-2 text-sm font-bold text-[#14B8A6] hover:text-[#0D9488] transition-all"
            >
              View All Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    {proj.tags.map(t => (
                      <span key={t} className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white text-slate-700 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white font-black text-base mb-0.5">{proj.title}</h3>
                    <p className="text-white/80 text-xs font-medium">{proj.subtitle}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{proj.desc}</p>
                  <div className="flex gap-2">
                    <a href={proj.live} className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl transition-all" style={{ background: proj.color, color: 'white' }}>
                      <ExternalLink size={12} /> Live
                    </a>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 bg-slate-900 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">
                      <FaGithub size={12} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <a href="https://github.com/rahulthakur7655" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg hover:scale-105">
              <FaGithub size={18} /> View More on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ SKILLS SNAPSHOT ══ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50/50 via-white to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Tech Stack" title="Technologies I" highlight="Work With" />
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-100 rounded-xl text-xs sm:text-sm font-bold text-slate-700 shadow-sm hover:shadow-md hover:border-teal-300 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="text-center">
            <Link to="/skills" className="inline-flex items-center gap-2 text-sm font-bold text-[#14B8A6] hover:text-[#0D9488] transition-all">
              Explore All Skills <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE HIGHLIGHT ══ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 sm:mb-12">
            <SectionHeader tag="Experience" title="Work" highlight="Experience" center={false} />
            <Link to="/experience" className="text-sm font-bold text-[#14B8A6] hover:text-[#0D9488] transition-all flex items-center gap-1">
              Full Details <ChevronRight size={14} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 text-white rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black mb-1">MERN Stack Developer Intern</h3>
                <p className="text-teal-50 text-base sm:text-lg font-semibold">Excellence Technology</p>
              </div>
              <span className="bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                Jul – Dec 2025
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Built full-stack apps with React, Node.js & MongoDB',
                'Designed RESTful APIs with proper authentication',
                'Optimized MongoDB queries and fixed production bugs',
                'Collaborated in agile team using Git & code reviews',
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-50">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  {r}
                </div>
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
