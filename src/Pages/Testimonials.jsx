import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'Tech Lead',
    company: 'Excellence Technology',
    avatar: 'AS',
    color: '#14B8A6',
    rating: 5,
    review: 'Rahul is an exceptional intern who quickly grasped complex MERN stack concepts. His ability to deliver clean, production-ready code within tight deadlines was impressive. He was proactive, collaborative, and a great addition to our team.',
    relation: 'Mentor at Excellence Technology'
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Product Manager',
    company: 'Client Project',
    avatar: 'PV',
    color: '#6366F1',
    rating: 5,
    review: 'Working with Rahul on the OPINIFI platform was a great experience. He built the complete finance dashboard with excellent attention to detail. The UI was polished, APIs were robust, and he delivered on time. Highly recommend!',
    relation: 'Client'
  },
  {
    id: 3,
    name: 'Rohit Kumar',
    role: 'Senior Developer',
    company: 'Excellence Technology',
    avatar: 'RK',
    color: '#F59E0B',
    rating: 5,
    review: 'Rahul has a strong foundation in full-stack development. What sets him apart is his problem-solving ability and passion for writing clean code. He tackled MongoDB optimization challenges that even senior developers struggled with.',
    relation: 'Senior Colleague'
  },
  {
    id: 4,
    name: 'Dr. Navneet Singh',
    role: 'Professor, CSE Department',
    company: 'BBSB Engineering College',
    avatar: 'NS',
    color: '#EC4899',
    rating: 5,
    review: 'Rahul is one of the most dedicated students in our department. Despite maintaining a strong CGPA, he consistently worked on real-world projects. His Chess Master application demonstrated advanced knowledge beyond the curriculum.',
    relation: 'Academic Mentor'
  },
  {
    id: 5,
    name: 'Sukhpreet Kaur',
    role: 'Team Member',
    company: 'College Project',
    avatar: 'SK',
    color: '#10B981',
    rating: 5,
    review: 'Rahul is an amazing team player. During our projects, he always guided the team through technical challenges. His knowledge of React and Node.js is outstanding, and he always ensured the project was delivered on schedule.',
    relation: 'Project Teammate'
  },
  {
    id: 6,
    name: 'Harpreet Singh',
    role: 'NCC Officer',
    company: 'National Cadet Corps',
    avatar: 'HS',
    color: '#F59E0B',
    rating: 5,
    review: 'Rahul demonstrated exemplary leadership and discipline throughout NCC training. Achieving the prestigious C Certificate is no small feat. He showed commitment, teamwork, and the ability to motivate others around him.',
    relation: 'NCC Officer'
  }
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-amber-400' : 'text-slate-200'}`}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
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
              What They Say
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Testimonials
            </h1>
            <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Feedback from mentors, colleagues, clients, and teammates who I've had the pleasure of working with.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100"
              >
                {/* Quote icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: t.color + '20', color: t.color }}
                >
                  <Quote size={18} />
                </div>

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Review */}
                <p className="text-slate-600 text-sm leading-7 my-4 italic">"{t.review}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A] text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                    <p className="text-xs" style={{ color: t.color }}>{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Testimonials;
