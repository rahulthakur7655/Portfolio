import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-lg bg-[#14B8A6] flex items-center justify-center font-bold text-xl">
                RT
              </div>

              <div>
                <h2 className="font-bold text-xl">
                  Rahul Thakur
                </h2>

                <p className="text-sm text-teal-100">
                  MERN Stack Developer
                </p>
              </div>

            </div>

            <p className="text-sm text-teal-100 leading-7">
              Building scalable and user-friendly web
              applications with React, Node.js,
              Express.js and MongoDB.
            </p>

            <div className="flex gap-4 mt-6 text-xl">

              <a
                href="https://github.com/rahulthakur7655"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-thakur-91399a3b5"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:rahulthakur7655@gmail.com"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-teal-100">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/skills" className="hover:text-white transition">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/experience" className="hover:text-white transition">Experience</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              More Pages
            </h3>

            <ul className="space-y-3 text-teal-100">
              <li><Link to="/resume" className="hover:text-white transition">Resume</Link></li>
              <li><Link to="/certifications" className="hover:text-white transition">Certifications</Link></li>
              <li><Link to="/achievements" className="hover:text-white transition">Achievements</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>

          </div>

          {/* CTA */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Let's Build Together 🚀
            </h3>

            <p className="text-sm text-teal-100 mb-6">
              Open to internships, freelance
              opportunities and full-time roles.
            </p>

            <button className="bg-[#14B8A6] hover:bg-[#0D9488] transition px-5 py-3 rounded-xl flex items-center gap-2">
              Download Resume
              <Download size={18} />
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-teal-700 mt-12 pt-6 text-center text-sm text-teal-100">

          © {new Date().getFullYear()} Rahul Thakur.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;