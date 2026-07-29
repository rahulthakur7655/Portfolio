import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+91 8377725158',
      link: 'tel:+918377725158',
      color: '#14B8A6'
    },
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'rahulthakur7655@gmail.com',
      link: 'mailto:rahulthakur7655@gmail.com',
      color: '#6366F1'
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Kharab, India',
      link: 'https://maps.google.com/?q=Kharab,India',
      color: '#EC4899'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/rahulthakur7655',
      color: '#0F172A',
      username: '@rahulthakur7655'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/rahul-thakur-91399a3b5',
      color: '#0A66C2',
      username: '/rahul-thakur'
    },
    {
      icon: <FaEnvelope size={20} />,
      name: 'Email',
      url: 'mailto:rahulthakur7655@gmail.com',
      color: '#EA4335',
      username: 'rahulthakur7655@gmail.com'
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="bg-gradient-to-br from-[#F0FDFA] to-white min-h-screen pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Let's Build Something Amazing
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Drop me a message and I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 mb-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 outline-none transition"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 outline-none transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#14B8A6] hover:bg-[#0D9488] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>Sending...</>
                  ) : status === 'success' ? (
                    <>✓ Sent Successfully!</>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">Contact Details</h3>
                <div className="space-y-5">
                  {contactInfo.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.link}
                      target={item.label === 'Location' ? '_blank' : undefined}
                      rel={item.label === 'Location' ? 'noreferrer' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition group"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: item.color + '20', color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase">{item.label}</p>
                        <p className="text-sm font-medium text-[#0F172A] group-hover:text-[#14B8A6] transition">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-r from-[#0F766E] to-[#115E59] text-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{social.name}</p>
                        <p className="text-xs text-teal-100">{social.username}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Find Me Here</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348639453126!3d30.73333480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feccdec3f0e51%3A0x4c1c3f5c5c1c3f5c!2sKharab%2C%20Punjab!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
