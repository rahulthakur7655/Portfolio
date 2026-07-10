import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  {
    name: "More",
    dropdown: true,
    items: [
      { name: "Experience", path: "/experience" },
      { name: "Education", path: "/education" },
      { name: "Certifications", path: "/certifications" },
      { name: "Achievements", path: "/achievements" },
      { name: "Services", path: "/services" },
      { name: "Tech Stack", path: "/techstack" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Resume", path: "/resume" },
      { name: "Gallery", path: "/gallery" },
      { name: "FAQ", path: "/faq" },
      { name: "Blog", path: "/blog" },
    ]
  },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdown(false);
    setMoreOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-teal-200">
              RT
            </div>
            <div>
              <h1 className="font-bold text-[#0F172A] text-lg leading-none">Rahul Thakur</h1>
              <p className="text-xs text-[#14B8A6] font-medium">MERN Stack Developer</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => 
              link.dropdown ? (
                <div key="more" className="relative">
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition ${
                      dropdown ? 'text-[#14B8A6] bg-teal-50' : 'text-slate-600 hover:text-[#14B8A6] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    <motion.div animate={{ rotate: dropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={15} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 w-52 overflow-hidden"
                      >
                        {link.items.map(item => (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm font-medium transition ${
                                isActive
                                  ? 'text-[#14B8A6] bg-teal-50'
                                  : 'text-slate-600 hover:text-[#14B8A6] hover:bg-slate-50'
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium text-sm transition ${
                      isActive
                        ? 'text-[#14B8A6] bg-teal-50'
                        : 'text-slate-600 hover:text-[#14B8A6] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden lg:flex items-center gap-2 bg-[#14B8A6] text-white px-5 py-2.5 rounded-xl hover:bg-[#0D9488] transition font-semibold text-sm shadow-lg shadow-teal-200"
          >
            <Download size={16} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 hover:bg-slate-50 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key="more">
                    <button
                      onClick={() => setMoreOpen(!moreOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-50 transition"
                    >
                      More Pages
                      <motion.div animate={{ rotate: moreOpen ? 180 : 0 }}>
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {moreOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {link.items.map(item => (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                                  isActive ? 'text-[#14B8A6] bg-teal-50' : 'text-slate-600 hover:bg-slate-50'
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition ${
                        isActive ? 'text-[#14B8A6] bg-teal-50 font-semibold' : 'text-slate-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              )}
              <a
                href="/resume.pdf"
                download
                className="bg-[#14B8A6] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm mt-2 hover:bg-[#0D9488] transition"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
