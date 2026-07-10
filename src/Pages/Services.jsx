import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Code2, Server, Database, Globe, Smartphone, Layers, Layout, Cpu } from 'lucide-react';

const services = [
  {
    Icon: Code2,
    title: 'Full Stack Development',
    description: 'End-to-end web application development using the MERN stack — from database design to pixel-perfect UI.',
    features: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'REST API Integration'],
    color: '#14B8A6',
    gradient: 'from-teal-400 to-cyan-500',
    price: 'Starting at ₹15,000'
  },
  {
    Icon: Layout,
    title: 'React Development',
    description: 'High-performance React applications with modern state management, hooks, and component architecture.',
    features: ['Custom Components', 'Redux/Context API', 'Responsive Design', 'Performance Optimization'],
    color: '#61DAFB',
    gradient: 'from-cyan-400 to-blue-500',
    price: 'Starting at ₹10,000'
  },
  {
    Icon: Server,
    title: 'REST API Development',
    description: 'Secure, scalable RESTful APIs built with Node.js and Express with proper authentication and documentation.',
    features: ['Express.js APIs', 'JWT Authentication', 'Rate Limiting', 'API Documentation'],
    color: '#F59E0B',
    gradient: 'from-amber-400 to-orange-500',
    price: 'Starting at ₹8,000'
  },
  {
    Icon: Globe,
    title: 'Responsive UI/UX',
    description: 'Beautiful, mobile-first responsive web interfaces that work seamlessly across all devices.',
    features: ['Tailwind CSS', 'Framer Motion', 'Cross-browser', 'WCAG Accessible'],
    color: '#EC4899',
    gradient: 'from-pink-400 to-rose-500',
    price: 'Starting at ₹6,000'
  },
  {
    Icon: Database,
    title: 'Database Design',
    description: 'Efficient MongoDB schema design, optimization, indexing, and aggregation pipeline architecture.',
    features: ['Schema Design', 'Query Optimization', 'Indexing', 'Aggregations'],
    color: '#47A248',
    gradient: 'from-green-400 to-emerald-500',
    price: 'Starting at ₹5,000'
  },
  {
    Icon: Cpu,
    title: 'AI/ML Integration',
    description: 'Integrate AI-powered features into web apps — chatbots, recommendation systems, and smart automation.',
    features: ['OpenAI Integration', 'ML Model APIs', 'Chatbots', 'Smart Features'],
    color: '#8B5CF6',
    gradient: 'from-violet-400 to-purple-500',
    price: 'Starting at ₹12,000'
  }
];

const Services = () => {
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
              What I Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              My Services
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional web development services tailored to your needs, delivered with quality and on time.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8 flex justify-center`}>
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <service.Icon size={40} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-7 mb-5">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <span 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                          style={{ background: service.color }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm font-semibold" style={{ color: service.color }}>
                      {service.price}
                    </span>
                    <motion.a
                      href="/contact"
                      whileHover={{ x: 3 }}
                      className="text-sm font-semibold text-[#14B8A6] hover:text-[#0D9488]"
                    >
                      Get Started →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-10 text-center shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-teal-100 mb-8 max-w-xl mx-auto">
              Let's collaborate and build something amazing together. I'm currently available for freelance work.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-[#0F766E] font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-teal-50 transition"
            >
              Let's Talk 🚀
            </motion.a>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
