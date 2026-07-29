import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #14B8A6, transparent)' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -left-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">

          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200/50 text-teal-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-sm"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Available for Opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-tight mb-3 sm:mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#14B8A6] via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Rahul
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium mb-3 sm:mb-4"
            >
              MERN Stack Developer &amp; Problem Solver
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Building scalable web applications with clean code, modern tech stack, and exceptional user experiences. 
              Currently pursuing B.Tech in CSE.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-teal-200/50 hover:shadow-teal-300/70 transition-all hover:scale-105"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:border-[#14B8A6] hover:text-[#14B8A6] hover:bg-teal-50/50 transition-all hover:scale-105 shadow-sm"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-xs sm:text-sm text-slate-500 font-medium hidden xs:inline">Connect:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/rahulthakur7655"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-thakur-91399a3b5"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            className="flex justify-center items-center relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-teal-200/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute w-72 h-72 sm:w-[22rem] sm:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full border border-teal-100/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Main image container */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Gradient glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/30 blur-3xl" />
                
                {/* Photo */}
                <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Rahul Thakur"
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Rahul+Thakur&background=14B8A6&color=fff&size=500&font-size=0.33&bold=true';
                    }}
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -left-2 sm:-left-4 top-1/4 bg-white rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xl border border-slate-100"
                  animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">Experience</p>
                  <p className="text-base sm:text-xl font-black text-[#14B8A6]">6+ Months</p>
                </motion.div>

                <motion.div
                  className="absolute -right-2 sm:-right-4 bottom-1/4 bg-white rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xl border border-slate-100"
                  animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">Projects</p>
                  <p className="text-base sm:text-xl font-black text-[#14B8A6]">10+</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400 text-xs font-medium"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-slate-400 rounded-full mt-1.5"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
