import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Download, ChevronDown } from "lucide-react";
import { Spin as Hamburger } from 'hamburger-react';
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

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
        : 'bg-white/90 backdrop-blur-md border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] text-white flex items-center justify-center font-black text-base sm:text-lg shadow-lg shadow-teal-200/50 group-hover:shadow-teal-300/70 transition-all group-hover:scale-105">
              RT
            </div>
            <div className="hidden xs:block">
              <h1 className="font-bold text-[#0F172A] text-sm sm:text-base lg:text-lg leading-none">Rahul Thakur</h1>
              <p className="text-[10px] sm:text-xs text-[#14B8A6] font-semibold">MERN Stack Developer</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => 
              link.dropdown ? (
                <div key="more" className="relative">
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      dropdown ? 'text-[#14B8A6] bg-teal-50 shadow-sm' : 'text-slate-700 hover:text-[#14B8A6] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    <motion.div animate={{ rotate: dropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                        className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 w-56 overflow-hidden"
                      >
                        {link.items.map(item => (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                              `block px-5 py-2.5 text-sm font-medium transition-all ${
                                isActive
                                  ? 'text-[#14B8A6] bg-teal-50 border-l-4 border-[#14B8A6]'
                                  : 'text-slate-600 hover:text-[#14B8A6] hover:bg-slate-50 hover:translate-x-1'
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
                    `px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      isActive
                        ? 'text-[#14B8A6] bg-teal-50 shadow-sm'
                        : 'text-slate-700 hover:text-[#14B8A6] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA Button (Desktop) */}
          <a
            href="/resume.pdf"
            download
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-6 py-2.5 rounded-xl hover:from-[#0D9488] hover:to-[#0a7a70] transition-all font-bold text-sm shadow-lg shadow-teal-200/50 hover:shadow-teal-300/70 hover:scale-105"
          >
            <Download size={16} />
            <span className="hidden xl:inline">Resume</span>
          </a>

          {/* Mobile Menu Button with Hamburger React */}
          <div className="lg:hidden">
            <Hamburger 
              toggled={isOpen} 
              toggle={setIsOpen} 
              size={24} 
              color={isOpen ? "#14B8A6" : "#0F172A"}
              duration={0.3}
            />
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key="more">
                      <button
                        onClick={() => setMoreOpen(!moreOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
                      >
                        <span>More Pages</span>
                        <motion.div animate={{ rotate: moreOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown size={18} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {moreOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 mt-1"
                          >
                            {link.items.map(item => (
                              <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                  `block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                    isActive ? 'text-[#14B8A6] bg-teal-50 shadow-sm' : 'text-slate-600 hover:bg-slate-50'
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
                        `px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive ? 'text-[#14B8A6] bg-teal-50 shadow-sm' : 'text-slate-700 hover:bg-slate-50'
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
                  className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm mt-2 hover:from-[#0D9488] hover:to-[#0a7a70] transition-all shadow-lg"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
