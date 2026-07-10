import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all pages for better performance
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Skills = lazy(() => import('./Pages/Skills'));
const Projects = lazy(() => import('./Pages/Projects'));
const Experience = lazy(() => import('./Pages/Experience'));
const Education = lazy(() => import('./Pages/Education'));
const Certifications = lazy(() => import('./Pages/Certifications'));
const Services = lazy(() => import('./Pages/Services'));
const TechStack = lazy(() => import('./Pages/TechStack'));
const Achievements = lazy(() => import('./Pages/Achievements'));
const Testimonials = lazy(() => import('./Pages/Testimonials'));
const Resume = lazy(() => import('./Pages/Resume'));
const Gallery = lazy(() => import('./Pages/Gallery'));
const FAQ = lazy(() => import('./Pages/FAQ'));
const Blog = lazy(() => import('./Pages/Blog'));
const Contact = lazy(() => import('./Pages/Contact'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F0FDFA]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] text-white flex items-center justify-center font-bold text-2xl shadow-lg animate-pulse">
        RT
      </div>
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/services" element={<Services />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 fallback */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-[#F0FDFA] flex-col gap-4 text-center px-6">
            <div className="text-8xl font-black text-[#14B8A6]">404</div>
            <h2 className="text-2xl font-bold text-[#0F172A]">Page Not Found</h2>
            <p className="text-slate-600">The page you are looking for doesn't exist.</p>
            <a href="/" className="bg-[#14B8A6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0D9488] transition">
              Go Home
            </a>
          </div>
        } />
      </Routes>
    </Suspense>
  );
};

export default App;
