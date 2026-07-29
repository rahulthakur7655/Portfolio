import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Download, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const moreLinks = [
    { name: 'Resume', path: '/resume' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center font-black text-xl shadow-lg">
                RT
              </div>
              <div>
                <h2 className="font-black text-xl leading-none">Rahul Thakur</h2>
                <p className="text-xs text-teal-400 font-semibold mt-0.5">MERN Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Building scalable web apps with React, Node.js, Express and MongoDB. 
              Available for freelance & full-time opportunities.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <FaGithub size={18} />, href: 'https://github.com/rahulthakur7655', label: 'GitHub' },
                { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/rahul-thakur-91399a3b5', label: 'LinkedIn' },
                { icon: <FaEnvelope size={18} />, href: 'mailto:rahulthakur7655@gmail.com', label: 'Email' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-slate-700 hover:bg-[#14B8A6] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-base mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                    <span className="text-teal-600 group-hover:translate-x-1 transition-transform">›</span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Pages */}
          <div>
            <h3 className="font-black text-base mb-5 text-white">More</h3>
            <ul className="space-y-2.5">
              {moreLinks.map(l => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                    <span className="text-teal-600 group-hover:translate-x-1 transition-transform">›</span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-black text-base mb-5 text-white">Let's Build 🚀</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Open to internships, freelance & full-time roles. Let's connect!
            </p>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#0a7a70] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-900/30 hover:scale-105 w-fit"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-teal-400 font-semibold">Rahul Thakur</span>. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-[#14B8A6] text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
