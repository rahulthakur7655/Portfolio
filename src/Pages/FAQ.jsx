import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Services',
    color: '#14B8A6',
    questions: [
      {
        q: 'What services do you offer?',
        a: 'I offer Full Stack Web Development (MERN Stack), React.js Frontend Development, REST API Development, Responsive UI/UX Design, MongoDB Database Design, and AI/ML Integration. I can handle end-to-end project development.'
      },
      {
        q: 'What is your tech stack?',
        a: 'My primary stack is MERN (MongoDB, Express.js, React.js, Node.js). I also work with Tailwind CSS, Redux Toolkit, JWT, Socket.IO, Git, GitHub, Postman, and deployment platforms like Vercel and Netlify.'
      },
      {
        q: 'Do you work on both frontend and backend?',
        a: 'Yes, I\'m a Full Stack Developer comfortable with both frontend (React.js, Tailwind CSS) and backend (Node.js, Express.js, MongoDB, REST APIs). I can build complete web applications from scratch.'
      }
    ]
  },
  {
    category: 'Availability',
    color: '#6366F1',
    questions: [
      {
        q: 'Are you available for freelance work?',
        a: 'Yes! I\'m actively available for freelance projects, part-time work, and internship opportunities. Feel free to reach out via the contact form or email me at rahulthakur7655@gmail.com.'
      },
      {
        q: 'Are you open to full-time job opportunities?',
        a: 'Absolutely! I\'m a final-year CSE student graduating in 2026 and actively looking for full-time developer roles. I\'m open to both on-site and remote opportunities.'
      },
      {
        q: 'What is your typical project turnaround time?',
        a: 'Turnaround time depends on project complexity. Simple projects take 1-2 weeks, medium projects 3-4 weeks, and larger full-stack applications 6-8 weeks. I always communicate timelines upfront.'
      },
      {
        q: 'What are your working hours?',
        a: 'I\'m flexible and typically work 8-10 hours a day. I\'m in IST (Indian Standard Time) and can accommodate clients across different time zones for meetings and communication.'
      }
    ]
  },
  {
    category: 'Projects',
    color: '#F59E0B',
    questions: [
      {
        q: 'Can you show examples of your previous work?',
        a: 'Yes! Check out my Projects page where I showcase OPINIFI (Finance Platform), Chess Master (Multiplayer Game), DocFormat (Document Tool), and StreamTube (Video Platform). All have GitHub links available.'
      },
      {
        q: 'Do you provide source code with the project?',
        a: 'Yes, I provide complete source code, documentation, and deployment guidance for all projects I develop. Code ownership transfers to you upon project completion.'
      },
      {
        q: 'Can you maintain and update my existing project?',
        a: 'Absolutely! I offer maintenance services including bug fixes, feature additions, performance optimization, and security updates for existing web applications.'
      }
    ]
  },
  {
    category: 'General',
    color: '#EC4899',
    questions: [
      {
        q: 'How do I contact you?',
        a: 'You can reach me via email at rahulthakur7655@gmail.com, phone at +91 8377725158, through the Contact form on this site, or via LinkedIn (linkedin.com/in/rahul-thakur-91399a3b5).'
      },
      {
        q: 'Can I download your resume?',
        a: 'Yes! You can download my updated resume from the Resume page or directly from the navbar. It includes my education, experience, skills, certifications, and projects.'
      }
    ]
  }
];

const FAQItem = ({ q, a, color }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-slate-50 transition"
      >
        <span className="font-semibold text-[#0F172A] pr-4 text-sm md:text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
          style={{ color }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-2 text-slate-600 text-sm leading-7 border-t border-slate-100">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about working with me, my services, and availability.
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-10">
            {faqs.map((cat, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.15 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: cat.color + '20', color: cat.color }}
                  >
                    <HelpCircle size={16} />
                  </div>
                  <h2 className="text-xl font-bold text-[#0F172A]">{cat.category}</h2>
                </div>
                <div className="space-y-3">
                  {cat.questions.map((item, idx) => (
                    <FAQItem key={idx} q={item.q} a={item.a} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-8 text-center shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
            <p className="text-teal-100 mb-6">Can't find the answer you're looking for? Send me a message and I'll get back to you.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0F766E] font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition shadow-lg"
            >
              Contact Me 📧
            </a>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;
