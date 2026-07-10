import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Download, ArrowDown, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a1628 0%, #0d2040 30%, #112240 50%, #0a2a4a 70%, #0d1b40 100%)'
    }}>
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #14B8A6, transparent)' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(rgba(20, 184, 166, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">

          {/* ── LEFT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-[#14B8A6] font-semibold text-lg mb-2">Hi, I'm</p>
              <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-1">
                Rahul
              </h1>
              <h1 className="text-6xl md:text-7xl font-black leading-none mb-4"
                style={{ color: '#14B8A6' }}
              >
                Thakur
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-5"
            >
              <span className="inline-block bg-[#14B8A6]/20 border border-[#14B8A6]/40 text-[#14B8A6] px-4 py-2 rounded-full text-sm font-bold mb-3">
                MERN Stack Developer
              </span>
              <p className="text-slate-300 text-lg font-medium">&amp; Final Year CSE Student</p>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 leading-8 mb-8 max-w-xl"
            >
              I build responsive, user-friendly web applications with clean code and great user experience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                to="/projects"
                className="bg-[#14B8A6] hover:bg-[#0D9488] text-white px-7 py-3.5 rounded-xl font-bold transition shadow-xl shadow-teal-900/40 flex items-center gap-2"
              >
                View My Work →
              </Link>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-slate-600 hover:border-[#14B8A6] text-slate-300 hover:text-[#14B8A6] px-7 py-3.5 rounded-xl font-bold transition flex items-center gap-2"
              >
                <Download size={18} /> Download Resume
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-6 text-sm text-slate-400"
            >
              {[
                { icon: <Phone size={14} />, text: '+91 8377725158' },
                { icon: <FaEnvelope size={13} />, text: 'rahulthakur7655@gmail.com' },
                { icon: <MapPin size={14} />, text: 'Kharab, Punjab, India' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-[#14B8A6]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* Social + Profile links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 text-xs text-slate-500"
            >
              <a
                href="https://www.linkedin.com/in/rahul-thakur-91399a3b5"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#14B8A6] transition"
              >
                <FaLinkedin /> linkedin.com/in/rahul-thakur-91399a3b5
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://github.com/rahulthakur7655"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#14B8A6] transition"
              >
                <FaGithub /> github.com/rahulthakur7655
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: PHOTO ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="flex justify-center relative"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute w-80 h-80 rounded-full border border-[#14B8A6]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-96 h-96 rounded-full border border-[#14B8A6]/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Photo container */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #14B8A6, transparent)' }}
              />

              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#14B8A6]/40 shadow-2xl">
                <img
                  src="/profile.png"
                  alt="Rahul Thakur"
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Rahul+Thakur&background=14B8A6&color=fff&size=400&font-size=0.33';
                  }}
                />
              </div>

              {/* Floating badge: Experience */}
              <motion.div
                className="absolute -left-6 top-1/4 bg-white rounded-2xl px-4 py-2.5 shadow-2xl border border-slate-100"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs text-slate-500 font-medium">Experience</p>
                <p className="text-xl font-black text-[#14B8A6]">6+ Months</p>
              </motion.div>

              {/* Floating badge: Projects */}
              <motion.div
                className="absolute -right-6 bottom-1/4 bg-white rounded-2xl px-4 py-2.5 shadow-2xl border border-slate-100"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs text-slate-500 font-medium">Projects</p>
                <p className="text-xl font-black text-[#14B8A6]">10+</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
